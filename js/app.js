/* ── Helpers ────────────────────────────────── */
const fmt  = (v, d=2) => v == null ? "—" : (+v).toFixed(d);
const fmtP = (v)      => v == null ? "—" : v + "%";
const sign = (v)      => v == null ? "—" : (v > 0 ? "+" : "") + (+v).toFixed(2);

function cellVal(cell) {
  const text = cell.textContent.trim().replace(/⚠/g, "").trim();
  if (text === "—" || text === "") return null;
  const num = parseFloat(text.replace(/[+%×]/g, ""));
  return isNaN(num) ? text : num;
}

function makeSortable(tableEl) {
  const ths = tableEl.querySelectorAll("thead th");
  let sortCol = -1, sortAsc = true;
  ths.forEach((th, colIdx) => {
    th.classList.add("sortable");
    th.addEventListener("click", () => {
      sortAsc = sortCol === colIdx ? !sortAsc : true;
      sortCol = colIdx;
      ths.forEach((h, i) => {
        h.classList.remove("sort-asc", "sort-desc");
        if (i === colIdx) h.classList.add(sortAsc ? "sort-asc" : "sort-desc");
      });
      const tbody = tableEl.querySelector("tbody");
      const rows = [...tbody.querySelectorAll("tr")];
      rows.sort((a, b) => {
        const av = cellVal(a.cells[colIdx]);
        const bv = cellVal(b.cells[colIdx]);
        if (av === null && bv === null) return 0;
        if (av === null) return 1;
        if (bv === null) return -1;
        if (typeof av === "number" && typeof bv === "number") return sortAsc ? av - bv : bv - av;
        return sortAsc ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av));
      });
      rows.forEach(r => tbody.appendChild(r));
    });
  });
}

const DARK = window.matchMedia("(prefers-color-scheme: dark)").matches;
const C = {
  blue: "#378ADD", blue2: "#185FA5",
  purple: "#534AB7",
  green: "#639922",
  red: "#E24B4A",
  amber: "#EF9F27",
  text: DARK ? "#a0a09a" : "#5f5e5a",
  grid: DARK ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
};

/* ── Team Switching ─────────────────────────── */
let activeTeam = "red";
// Track Chart instances so we can destroy on re-render
const chartRegistry = {};

function switchTeam(team) {
  if (team === activeTeam) return;
  activeTeam = team;

  // Update switcher button states
  document.querySelectorAll(".ts-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.team === team)
  );

  // Swap active data globals
  if (team === "red") {
    PLAYERS           = RED_PLAYERS;
    GOALIES           = RED_GOALIES;
    STRENGTHS         = RED_STRENGTHS;
    WEAKNESSES        = RED_WEAKNESSES;
    GAME_PLAN         = RED_GAME_PLAN;
    TEAM_NAME         = RED_TEAM_NAME;
    RADAR_DATA        = RED_RADAR_DATA;
    OVERVIEW_FINDINGS = RED_OVERVIEW_FINDINGS;
    POSS_FOOTNOTE     = RED_POSS_FOOTNOTE;
    GOALIE_NOTE       = RED_GOALIE_NOTE;
  } else if (team === "royal") {
    PLAYERS           = ROYAL_PLAYERS;
    GOALIES           = ROYAL_GOALIES;
    STRENGTHS         = ROYAL_STRENGTHS;
    WEAKNESSES        = ROYAL_WEAKNESSES;
    GAME_PLAN         = ROYAL_GAME_PLAN;
    TEAM_NAME         = ROYAL_TEAM_NAME;
    RADAR_DATA        = ROYAL_RADAR_DATA;
    OVERVIEW_FINDINGS = ROYAL_OVERVIEW_FINDINGS;
    POSS_FOOTNOTE     = ROYAL_POSS_FOOTNOTE;
    GOALIE_NOTE       = ROYAL_GOALIE_NOTE;
  } else {
    PLAYERS           = GOLD_PLAYERS;
    GOALIES           = GOLD_GOALIES;
    STRENGTHS         = GOLD_STRENGTHS;
    WEAKNESSES        = GOLD_WEAKNESSES;
    GAME_PLAN         = GOLD_GAME_PLAN;
    TEAM_NAME         = GOLD_TEAM_NAME;
    RADAR_DATA        = GOLD_RADAR_DATA;
    OVERVIEW_FINDINGS = GOLD_OVERVIEW_FINDINGS;
    POSS_FOOTNOTE     = GOLD_POSS_FOOTNOTE;
    GOALIE_NOTE       = GOLD_GOALIE_NOTE;
  }

  // Update sidebar title
  document.getElementById("sidebar-team-name").innerHTML =
    TEAM_NAME + "<br>Scouting Report";

  // Destroy all existing charts so they re-render cleanly
  Object.keys(chartRegistry).forEach(id => {
    if (chartRegistry[id]) { chartRegistry[id].destroy(); delete chartRegistry[id]; }
  });

  // Reset built-page cache and re-render current page
  Object.keys(built).forEach(k => delete built[k]);

  // Find which page is active and rebuild it
  const activePage = document.querySelector(".page.active");
  if (activePage) buildPage(activePage.id);
}

/* ── Navigation ─────────────────────────────── */
function initNav() {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.page;
      document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(target).classList.add("active");
      document.querySelector(".sidebar").classList.remove("open");
      buildPage(target);
    });
  });

  const toggle = document.getElementById("mobileToggle");
  if (toggle) toggle.addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("open");
  });
}

/* ── Build pages lazily ─────────────────────── */
const built = {};
function buildPage(id) {
  if (built[id]) return;
  built[id] = true;
  if (id === "overview")   buildOverview();
  if (id === "roster")     buildRoster();
  if (id === "finishing")  buildFinishing();
  if (id === "possession") buildPossession();
  if (id === "onice")      buildOnIce();
  if (id === "goalies")    buildGoalies();
  if (id === "scouting")   buildScouting();
  if (id === "gameplan")   buildGamePlan();
}

function makeChart(id, config) {
  if (chartRegistry[id]) chartRegistry[id].destroy();
  const ctx = document.getElementById(id);
  if (!ctx) return null;
  const chart = new Chart(ctx.getContext("2d"), config);
  chartRegistry[id] = chart;
  return chart;
}

/* ── Overview ───────────────────────────────── */
function buildOverview() {
  const reliable = PLAYERS.filter(p => p.reliable);

  // Key findings bullets
  const of = OVERVIEW_FINDINGS;
  document.getElementById("ov-strengths").innerHTML =
    of.strengths.map(s => `• ${s}`).join("<br>");
  document.getElementById("ov-weaknesses").innerHTML =
    of.weaknesses.map(w => `• ${w}`).join("<br>");

  // Metric cards — computed dynamically from active data
  const topFinisher = reliable.filter(p => p.finishing).sort((a,b) => b.finishing - a.finishing)[0];
  const topNetXG    = reliable.slice().sort((a,b) => b.net_xg_pg - a.net_xg_pg)[0];
  const g1          = GOALIES[0];
  const g2          = GOALIES[1];

  document.getElementById("ov-metrics").innerHTML = `
    <div class="metric-card good">
      <div class="metric-label">Best finisher (10+ GP)</div>
      <div class="metric-value">${topFinisher ? fmt(topFinisher.finishing) + "×" : "—"}</div>
      <div class="metric-sub">${topFinisher ? topFinisher.name : "—"}</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Best net xG/GP (10+ GP)</div>
      <div class="metric-value">${topNetXG ? "+" + fmt(topNetXG.net_xg_pg) : "—"}</div>
      <div class="metric-sub">${topNetXG ? topNetXG.name : "—"}</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Goalie 1 GSAx</div>
      <div class="metric-value" style="color:var(--red-mid)">${sign(g1.total_gsax)}</div>
      <div class="metric-sub">${g1.sv_pct}% SV% · ${g1.games ? g1.games.length : g1.gp} games</div>
    </div>
    <div class="metric-card warn">
      <div class="metric-label">Goalie 2 GSAx</div>
      <div class="metric-value">${sign(g2.total_gsax)}</div>
      <div class="metric-sub">${g2.sv_pct}% SV% · ${g2.games ? g2.games.length : g2.gp} games</div>
    </div>`;

  // Radar
  const radarLabels = ["Finishing quality","Shot danger","F possession","D possession","On-ice xG impact","Faceoffs","Goalie perf.","Scoring ch. conv."];

  makeChart("ov-radar", {
    type: "radar",
    data: {
      labels: radarLabels,
      datasets: [{
        data: RADAR_DATA,
        backgroundColor: "rgba(55,138,221,0.15)",
        borderColor: C.blue, pointBackgroundColor: C.blue,
        pointRadius: 4, borderWidth: 1.5
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { r: {
        min: 0, max: 10, ticks: { stepSize: 2, color: C.text, font: { size: 10 } },
        pointLabels: { color: C.text, font: { size: 11 } },
        grid: { color: C.grid }, angleLines: { color: C.grid }
      }}
    }
  });
}

/* ── Roster ─────────────────────────────────── */
function buildRoster() {
  const fwds = PLAYERS.filter(p => p.pos === "F");
  const dmen = PLAYERS.filter(p => p.pos === "D");

  function cards(arr) {
    return arr.map(p => `
      <div class="player-card ${p.reliable ? "reliable" : "limited"}">
        <div class="pc-header">
          <div><div class="pc-name">${p.name}</div><div class="pc-team">${p.team}</div></div>
          <span class="pc-pos ${p.pos}">${p.pos}</span>
        </div>
        <div class="pc-stats">
          <div class="pc-stat">GP <span>${p.gp}</span></div>
          ${p.pts_pg   != null ? `<div class="pc-stat">Pts/GP <span>${fmt(p.pts_pg,2)}</span></div>`     : ""}
          ${p.finishing!= null ? `<div class="pc-stat">Fin. <span>${fmt(p.finishing,2)}×</span></div>`   : ""}
          <div class="pc-stat">CORSI <span>${fmtP(p.corsi)}</span></div>
          <div class="pc-stat">Net xG/GP <span>${sign(p.net_xg_pg)}</span></div>
          ${p.fo_n > 5  ? `<div class="pc-stat">FO% <span>${fmtP(p.fo_pct)}</span></div>`               : ""}
        </div>
        ${!p.reliable ? `<div class="pc-note">⚠ Small sample (${p.gp} GP)</div>` : ""}
      </div>`).join("");
  }

  document.getElementById("roster-fwds").innerHTML = cards(fwds);
  document.getElementById("roster-dmen").innerHTML = cards(dmen);
}

/* ── Finishing ──────────────────────────────── */
function buildFinishing() {
  const reliable = PLAYERS.filter(p => p.reliable && p.finishing != null);
  const all      = PLAYERS;

  // Dynamic metric tiles
  const topFin  = reliable.filter(p=>p.finishing).sort((a,b)=>b.finishing-a.finishing)[0];
  const topXGS  = all.filter(p=>p.xg_shot).sort((a,b)=>b.xg_shot-a.xg_shot)[0];
  const topGMXG = reliable.sort((a,b)=>b.goals_minus_xg-a.goals_minus_xg)[0];
  const lowFin  = reliable.filter(p=>p.finishing).sort((a,b)=>a.finishing-b.finishing)[0];

  document.getElementById("fin-metrics").innerHTML = `
    <div class="metric-card good">
      <div class="metric-label">Best finisher (10+ GP)</div>
      <div class="metric-value">${topFin ? fmt(topFin.finishing) + "×" : "—"}</div>
      <div class="metric-sub">${topFin ? topFin.name + " — " + topFin.gp + " GP" : "—"}</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Best xG/shot</div>
      <div class="metric-value">${topXGS ? fmt(topXGS.xg_shot) : "—"}</div>
      <div class="metric-sub">${topXGS ? topXGS.name + " — " + topXGS.gp + " GP" : "—"}</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Best G−xG/GP (10+ GP)</div>
      <div class="metric-value">${topGMXG && topGMXG.goals_minus_xg != null ? (topGMXG.goals_minus_xg>0?"+":"") + fmt(topGMXG.goals_minus_xg) : "—"}</div>
      <div class="metric-sub">${topGMXG ? topGMXG.name : "—"}</div>
    </div>
    <div class="metric-card warn">
      <div class="metric-label">Underperforming xG (10+ GP)</div>
      <div class="metric-value">${lowFin && lowFin !== topFin ? fmt(lowFin.finishing) + "×" : "—"}</div>
      <div class="metric-sub">${lowFin && lowFin !== topFin ? lowFin.name + " — " + lowFin.gp + " GP" : "—"}</div>
    </div>`;

  // Goals vs xG chart
  const r = PLAYERS.filter(p => p.reliable && p.finishing != null);
  makeChart("fin-chart", {
    type: "bar",
    data: {
      labels: r.map(p => p.name.split(" ").slice(-1)[0]),
      datasets: [
        { label: "Actual goals/GP",   data: r.map(p => p.goals_pg), backgroundColor: C.blue2,                      borderRadius: 3 },
        { label: "xG/GP (expected)",  data: r.map(p => p.xg_pg),    backgroundColor: "rgba(186,117,23,0.7)",       borderRadius: 3 }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        title: { display: true, text: "Blue = actual goals/GP · Amber = xG/GP — gap shows finishing ability", color: C.text, font: { size: 11 }, align: "start" },
        tooltip: { callbacks: { label: ctx => ` ${ctx.dataset.label}: ${fmt(ctx.raw, 3)}` } }
      },
      scales: {
        x: { ticks: { color: C.text }, grid: { display: false } },
        y: { beginAtZero: true, ticks: { color: C.text }, grid: { color: C.grid } }
      }
    }
  });

  // xG/shot chart
  const sorted = [...PLAYERS].filter(p=>p.xg_shot!=null).sort((a,b) => b.xg_shot - a.xg_shot);
  makeChart("xgshot-chart", {
    type: "bar",
    data: {
      labels: sorted.map(p => p.name.split(" ").slice(-1)[0] + (p.pos === "D" ? " (D)" : "")),
      datasets: [{
        data: sorted.map(p => p.xg_shot),
        backgroundColor: sorted.map(p => p.xg_shot >= 1.5 ? C.red : p.xg_shot >= 0.7 ? C.amber : C.green),
        borderRadius: 3
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        title: { display: true, text: "xG per shot — red = high danger slot · yellow = medium · green = perimeter", color: C.text, font: { size: 11 }, align: "start" },
        tooltip: { callbacks: { label: ctx => ` ${fmt(ctx.raw,2)} xG/shot (${sorted[ctx.dataIndex].gp} GP)` } }
      },
      scales: {
        x: { ticks: { color: C.text, font: { size: 11 }, maxRotation: 30 }, grid: { display: false } },
        y: { beginAtZero: true, ticks: { color: C.text }, grid: { color: C.grid } }
      }
    }
  });

  // Finishing table
  const tb = document.getElementById("fin-table-body");
  if (tb) {
    tb.innerHTML = PLAYERS.map(p => `
    <tr>
      <td class="pos-${p.pos}">${p.name}${!p.reliable ? '<span class="badge-lim">⚠</span>' : ""}</td>
      <td class="${p.pos === "F" ? "pos-f" : "pos-d"}">${p.pos}</td>
      <td>${p.gp}</td>
      <td>${p.goals_pg      != null ? p.goals_pg.toFixed(3)      : "—"}</td>
      <td>${p.xg_pg         != null ? p.xg_pg.toFixed(3)         : "—"}</td>
      <td class="${p.goals_minus_xg > 0 ? "hi" : p.goals_minus_xg < -0.05 ? "lo" : ""}">${p.goals_minus_xg != null ? (p.goals_minus_xg > 0 ? "+" : "") + p.goals_minus_xg.toFixed(3) : "—"}</td>
      <td class="${p.finishing > 1.2 ? "hi" : p.finishing < 0.85 ? "lo" : ""}">${p.finishing != null ? p.finishing.toFixed(2) + "×" : "—"}</td>
      <td class="${p.xg_shot >= 1.5 ? "hi" : p.xg_shot <= 0.2 ? "lo" : ""}">${p.xg_shot    != null ? p.xg_shot.toFixed(2)     : "—"}</td>
      <td>${p.sog_pg         != null ? p.sog_pg.toFixed(2)        : "—"}</td>
    </tr>`).join("");
    makeSortable(tb.closest("table"));
  }
}

/* ── Possession ─────────────────────────────── */
function buildPossession() {
  const reliable = PLAYERS.filter(p => p.reliable);

  // Dynamic tiles
  const topFCorsi = reliable.filter(p=>p.pos==="F").sort((a,b)=>b.corsi-a.corsi)[0];
  const topDCorsi = reliable.filter(p=>p.pos==="D").sort((a,b)=>b.corsi-a.corsi)[0];
  const lowDCorsi = reliable.filter(p=>p.pos==="D").sort((a,b)=>a.corsi-b.corsi)[0];
  const topFO     = reliable.filter(p=>p.fo_n>30).sort((a,b)=>b.fo_pct-a.fo_pct)[0];

  document.getElementById("poss-metrics").innerHTML = `
    <div class="metric-card good">
      <div class="metric-label">Best F CORSI (10+ GP)</div>
      <div class="metric-value">${topFCorsi ? topFCorsi.corsi + "%" : "—"}</div>
      <div class="metric-sub">${topFCorsi ? topFCorsi.name : "—"}</div>
    </div>
    <div class="metric-card ${topDCorsi && topDCorsi.corsi >= 50 ? "good" : "warn"}">
      <div class="metric-label">Best D CORSI (10+ GP)</div>
      <div class="metric-value">${topDCorsi ? topDCorsi.corsi + "%" : "—"}</div>
      <div class="metric-sub">${topDCorsi ? topDCorsi.name : "—"}</div>
    </div>
    <div class="metric-card warn">
      <div class="metric-label">D possession problem</div>
      <div class="metric-value">${lowDCorsi && lowDCorsi !== topDCorsi ? lowDCorsi.corsi + "%" : "—"}</div>
      <div class="metric-sub">${lowDCorsi && lowDCorsi !== topDCorsi ? lowDCorsi.name + " (" + lowDCorsi.gp + " GP)" : "—"}</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">FO center (30+ draws)</div>
      <div class="metric-value">${topFO ? topFO.fo_pct + "%" : "—"}</div>
      <div class="metric-sub">${topFO ? topFO.name + " (" + topFO.fo_n + " draws)" : "No qualified player"}</div>
    </div>`;

  // CORSI chart
  const sorted = [...PLAYERS].sort((a,b) => b.corsi - a.corsi);
  makeChart("corsi-chart", {
    type: "bar",
    data: {
      labels: sorted.map(p => {
        const short = p.name.split(" ").slice(-1)[0];
        return short + (p.pos === "D" ? " D" : " F");
      }),
      datasets: [{
        data: sorted.map(p => p.corsi),
        backgroundColor: sorted.map(p => {
          const base = p.pos === "F" ? "55,138,221" : "83,74,183";
          const alpha = p.reliable ? 1 : 0.4;
          return `rgba(${base},${alpha})`;
        }),
        borderRadius: 3
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        title: { display: true, text: "Blue = F · Purple = D · Faded = fewer than 10 GP", color: C.text, font: { size: 11 }, align: "start" },
        tooltip: { callbacks: { label: ctx => ` ${sorted[ctx.dataIndex].corsi}% CORSI (${sorted[ctx.dataIndex].gp} GP)` } }
      },
      scales: {
        x: { ticks: { color: C.text, font: { size: 11 }, maxRotation: 35 }, grid: { display: false } },
        y: { min: 0, max: 85, ticks: { color: C.text, callback: v => v+"%" }, grid: { color: C.grid } }
      }
    }
  });

  // Possession table
  const ptb = document.getElementById("poss-table-body");
  if (ptb) {
    ptb.innerHTML = [...PLAYERS].sort((a,b) => b.corsi - a.corsi).map(p => `
    <tr>
      <td class="pos-${p.pos}">${p.name}${!p.reliable ? '<span class="badge-lim">⚠</span>' : ""}</td>
      <td>${p.pos}</td>
      <td>${p.gp}</td>
      <td class="${p.corsi >= 52 ? "hi" : p.corsi <= 45 ? "lo" : ""}">${p.corsi}%</td>
      <td class="${p.fenwick >= 52 ? "hi" : p.fenwick <= 45 ? "lo" : ""}">${p.fenwick}%</td>
      <td>${p.fo_pct != null && p.fo_n > 5 ? p.fo_pct + "%" : "—"}</td>
      <td>${p.fo_n > 0 ? p.fo_n : "—"}</td>
      <td>${p.sc_pct != null ? p.sc_pct + "%" : "—"}</td>
    </tr>`).join("");
    makeSortable(ptb.closest("table"));
  }

  const fn = document.getElementById("poss-footnote");
  if (fn) fn.textContent = POSS_FOOTNOTE;
}

/* ── On-Ice Impact ──────────────────────────── */
function buildOnIce() {
  const reliable = PLAYERS.filter(p => p.reliable).sort((a,b) => b.net_xg_pg - a.net_xg_pg);

  // Dynamic tiles
  const top  = reliable[0];
  const bot  = reliable[reliable.length-1];
  const topF = reliable.filter(p=>p.pos==="F")[0];
  const topD = reliable.filter(p=>p.pos==="D")[0];

  document.getElementById("onice-metrics").innerHTML = `
    <div class="metric-card ${top && top.net_xg_pg > 0 ? "good" : "warn"}">
      <div class="metric-label">Best net xG/GP (10+ GP)</div>
      <div class="metric-value">${top ? sign(top.net_xg_pg) : "—"}</div>
      <div class="metric-sub">${top ? top.name + " — " + top.gp + " GP" : "—"}</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Best F net xG/GP</div>
      <div class="metric-value">${topF ? sign(topF.net_xg_pg) : "—"}</div>
      <div class="metric-sub">${topF ? topF.name + " — " + topF.gp + " GP" : "—"}</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Best D net xG/GP</div>
      <div class="metric-value">${topD ? sign(topD.net_xg_pg) : "—"}</div>
      <div class="metric-sub">${topD ? topD.name + " — " + topD.gp + " GP" : "—"}</div>
    </div>
    <div class="metric-card warn">
      <div class="metric-label">Worst net xG/GP (10+ GP)</div>
      <div class="metric-value">${bot && bot !== top ? sign(bot.net_xg_pg) : "—"}</div>
      <div class="metric-sub">${bot && bot !== top ? bot.name + " — " + bot.gp + " GP" : "—"}</div>
    </div>`;

  makeChart("netxg-chart", {
    type: "bar",
    data: {
      labels: reliable.map(p => p.name.split(" ").slice(-1)[0] + (p.pos === "D" ? " D" : " F")),
      datasets: [{
        data: reliable.map(p => p.net_xg_pg),
        backgroundColor: reliable.map(p => p.net_xg_pg >= 0 ? "rgba(99,153,34,0.85)" : "rgba(226,75,74,0.85)"),
        borderRadius: 3
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        title: { display: true, text: "Net xG/GP — reliable samples only (10+ GP) · Green = team outchances opp. when on ice", color: C.text, font: { size: 11 }, align: "start" },
        tooltip: { callbacks: { label: ctx => ` ${(ctx.raw > 0 ? "+" : "") + fmt(ctx.raw,2)} net xG/GP (${reliable[ctx.dataIndex].gp} GP)` } }
      },
      scales: {
        x: { ticks: { color: C.text }, grid: { display: false } },
        y: { ticks: { color: C.text, callback: v => (v > 0 ? "+" : "") + v.toFixed(2) }, grid: { color: C.grid } }
      }
    }
  });

  // On-ice table
  const otb = document.getElementById("onice-table-body");
  if (otb) {
    otb.innerHTML = [...PLAYERS].sort((a,b) => b.net_xg_pg - a.net_xg_pg).map(p => `
    <tr>
      <td class="pos-${p.pos}">${p.name}${!p.reliable ? '<span class="badge-lim">⚠</span>' : ""}</td>
      <td>${p.pos}</td>
      <td>${p.gp}</td>
      <td class="${p.net_xg_pg > 0.1 ? "hi" : p.net_xg_pg < -0.15 ? "lo" : ""}">${sign(p.net_xg_pg)}</td>
      <td class="${p.plusminus_pg > 0.3 ? "hi" : p.plusminus_pg < -0.2 ? "lo" : ""}">${sign(p.plusminus_pg)}</td>
      <td class="${p.corsi >= 52 ? "hi" : p.corsi <= 45 ? "lo" : ""}">${p.corsi}%</td>
      <td>${p.blocks_pg  != null ? p.blocks_pg.toFixed(2)  : "—"}</td>
      <td>${p.shotblk_pg != null ? p.shotblk_pg.toFixed(2) : "—"}</td>
    </tr>`).join("");
    makeSortable(otb.closest("table"));
  }
}

/* ── Goalies ────────────────────────────────── */
function buildGoalies() {
  const container = document.getElementById("goalies-content");
  let html = "";

  // Render each goalie
  GOALIES.forEach((g, gi) => {
    const gsaxClass = g.total_gsax >= 0 ? "hi" : "lo";
    const isAggregate = g.aggregate === true;

    html += `
      <div class="section-label">${g.name || ("Goalie " + (gi+1))}</div>
      <div class="metric-row">
        <div class="metric-card"><div class="metric-label">Saves / Shots</div>
          <div class="metric-value">${g.total_saves}/${g.total_shots}</div></div>
        <div class="metric-card"><div class="metric-label">SV%</div>
          <div class="metric-value">${g.sv_pct}%</div></div>
        <div class="metric-card"><div class="metric-label">Total GSAx</div>
          <div class="metric-value ${gsaxClass}">${(g.total_gsax > 0 ? "+" : "") + g.total_gsax}</div>
          <div class="metric-sub">Goals saved above expected</div></div>
        <div class="metric-card"><div class="metric-label">Total xGA faced</div>
          <div class="metric-value">${g.total_xga}</div></div>
      </div>`;

    if (!isAggregate && g.games) {
      html += `<div class="goalie-grid" id="goalie-games-${gi}"></div>`;
    } else if (isAggregate && g.note) {
      html += `<p class="note-text">${g.note}</p>`;
    }
  });

  // Combined GSAx chart — use G1 only if game log exists, else first two non-aggregate
  const chartGoalies = GOALIES.filter(g => !g.aggregate && g.games && g.games.length > 0).slice(0, 2);
  if (chartGoalies.length > 0) {
    const g1 = chartGoalies[0];
    const g2 = chartGoalies[1];
    const allGames = [
      ...g1.games.map(gm => ({ label: "G1: " + gm.opp.replace(/^(vs |@ )/, "").split(" ").slice(0,3).join(" "), gsax: gm.gsax })),
      ...(g2 ? g2.games.map(gm => ({ label: "G2: " + gm.opp.replace(/^(vs |@ )/, "").split(" ").slice(0,3).join(" "), gsax: gm.gsax })) : [])
    ];

    const g1count = g1.games.length;
    const g2count = g2 ? g2.games.length : 0;
    const chartLabel = g2
      ? `GSAx by game — first ${g1count} = ${g1.name || "G1"} · last ${g2count} = ${g2.name || "G2"}`
      : `GSAx by game — ${g1.name || "G1"} (${g1count} games)`;

    html += `
      <div class="chart-card" style="margin-top:8px">
        <div class="chart-title">${chartLabel}</div>
        <div class="chart-wrap" style="height:240px"><canvas id="goalie-chart"></canvas></div>
      </div>
      <p class="note-text" id="goalie-note-text"></p>`;
  }

  container.innerHTML = html;

  // Populate game log rows
  GOALIES.filter(g => !g.aggregate && g.games).forEach((g, gi) => {
    const el = document.getElementById(`goalie-games-${gi}`);
    if (!el) return;
    el.innerHTML = g.games.map(gm => {
      const result    = gm.score && gm.score.startsWith("W") ? "W" : gm.score && gm.score.startsWith("L") ? "L" : "";
      const barColor  = gm.sv_pct >= 92 ? "#639922" : gm.sv_pct >= 85 ? "#EF9F27" : "#E24B4A";
      const gsaxClass = gm.gsax >= 0 ? "pos" : "neg";
      return `<div class="goalie-game">
        <div class="gg-header">
          <span class="gg-opp">${gm.opp}</span>
          ${result ? `<span class="gg-score-badge ${result}">${gm.score}</span>` : ""}
        </div>
        <div class="gg-stats">
          ${gm.saves}/${gm.shots} sv · ${gm.sv_pct}% SV% · xGA ${gm.xga} ·
          <span class="gg-gsax ${gsaxClass}">GSAx ${gm.gsax >= 0 ? "+" : ""}${gm.gsax}</span>
        </div>
        <div class="sv-bar"><div class="sv-fill" style="width:${gm.sv_pct}%;background:${barColor}"></div></div>
      </div>`;
    }).join("");
  });

  // GSAx chart
  const chartGoalies2 = GOALIES.filter(g => !g.aggregate && g.games && g.games.length > 0).slice(0, 2);
  if (chartGoalies2.length > 0) {
    const allGames = [
      ...chartGoalies2[0].games.map(gm => ({ label: "G1: " + gm.opp.replace(/^(vs |@ )/, "").split(" ").slice(0,3).join(" "), gsax: gm.gsax })),
      ...(chartGoalies2[1] ? chartGoalies2[1].games.map(gm => ({ label: "G2: " + gm.opp.replace(/^(vs |@ )/, "").split(" ").slice(0,3).join(" "), gsax: gm.gsax })) : [])
    ];

    makeChart("goalie-chart", {
      type: "bar",
      data: {
        labels: allGames.map(g => g.label),
        datasets: [{
          data: allGames.map(g => g.gsax),
          backgroundColor: allGames.map(g => g.gsax >= 0 ? "rgba(99,153,34,0.85)" : "rgba(226,75,74,0.85)"),
          borderRadius: 3
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          title: { display: true, text: "GSAx per game — green = outperformed xGA · red = underperformed", color: C.text, font: { size: 11 }, align: "start" },
          tooltip: { callbacks: { label: ctx => ` GSAx: ${(ctx.raw > 0 ? "+" : "") + fmt(ctx.raw,2)}` } }
        },
        scales: {
          x: { ticks: { color: C.text, font: { size: 10 }, maxRotation: 30 }, grid: { display: false } },
          y: { ticks: { color: C.text, callback: v => (v > 0 ? "+" : "") + v }, grid: { color: C.grid } }
        }
      }
    });

    const noteEl = document.getElementById("goalie-note-text");
    if (noteEl) noteEl.textContent = GOALIE_NOTE;
  }
}

/* ── Strengths & Weaknesses ─────────────────── */
function buildScouting() {
  document.getElementById("strengths-list").innerHTML =
    STRENGTHS.map(s => `<div class="sw-item"><strong>${s.title}</strong>${s.body}</div>`).join("");
  document.getElementById("weaknesses-list").innerHTML =
    WEAKNESSES.map(w => `<div class="sw-item"><strong>${w.title}</strong>${w.body}</div>`).join("");

  makeChart("sw-radar", {
    type: "radar",
    data: {
      labels: ["Finishing quality","Shot danger (xG/shot)","F possession","D possession","On-ice xG impact","FO strength","Goalie perf.","ScCh conversion"],
      datasets: [{
        data: RADAR_DATA,
        backgroundColor: "rgba(55,138,221,0.15)",
        borderColor: C.blue, pointBackgroundColor: C.blue,
        pointRadius: 4, borderWidth: 1.5
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { r: {
        min: 0, max: 10, ticks: { stepSize: 2, color: C.text, font: { size: 10 } },
        pointLabels: { color: C.text, font: { size: 11 } },
        grid: { color: C.grid }, angleLines: { color: C.grid }
      }}
    }
  });
}

/* ── Game Plan ──────────────────────────────── */
function buildGamePlan() {
  document.getElementById("gameplan-list").innerHTML = GAME_PLAN.map(g => `
    <div class="gp-item">
      <div class="gp-num">${g.n}</div>
      <div>
        <div class="gp-title">${g.title}</div>
        <div class="gp-body">${g.body}</div>
      </div>
    </div>`).join("");
}

/* ── Init ───────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  buildPage("overview");
});
