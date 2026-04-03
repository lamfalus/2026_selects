/* ── Helpers ────────────────────────────────── */
const fmt  = (v, d=2) => v == null ? "—" : (+v).toFixed(d);
const fmtP = (v)      => v == null ? "—" : v + "%";
const sign = (v)      => v == null ? "—" : (v > 0 ? "+" : "") + (+v).toFixed(2);
const cls  = (v, hi=0, lo=0) => v == null ? "" : (v >= hi ? "hi" : v <= lo ? "lo" : "");

const DARK = window.matchMedia("(prefers-color-scheme: dark)").matches;
const C = {
  blue:   "#378ADD", blue2: "#185FA5",
  purple: "#534AB7",
  green:  "#639922",
  red:    "#E24B4A",
  amber:  "#EF9F27",
  text:   DARK ? "#a0a09a" : "#5f5e5a",
  grid:   DARK ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
};

/* ── Navigation ─────────────────────────────── */
function initNav() {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.page;
      document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(target).classList.add("active");
      // close mobile sidebar
      document.querySelector(".sidebar").classList.remove("open");
      // lazy-build charts
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
  if (id === "overview")    buildOverview();
  if (id === "roster")      buildRoster();
  if (id === "finishing")   buildFinishing();
  if (id === "possession")  buildPossession();
  if (id === "onice")       buildOnIce();
  if (id === "goalies")     buildGoalies();
  if (id === "scouting")    buildScouting();
  if (id === "gameplan")    buildGamePlan();
}

/* ── Overview ───────────────────────────────── */
function buildOverview() {
  const g1 = GOALIES[0], g2 = GOALIES[1];
  const reliable = PLAYERS.filter(p => p.reliable);

  // Metric cards
  const topFinisher = reliable.filter(p => p.finishing).sort((a,b) => b.finishing - a.finishing)[0];
  const topNetXG    = reliable.sort((a,b) => b.net_xg_pg - a.net_xg_pg)[0];

  document.getElementById("ov-metrics").innerHTML = `
    <div class="metric-card good"><div class="metric-label">Best finisher (10+ GP)</div>
      <div class="metric-value">${fmt(topFinisher.finishing)}×</div>
      <div class="metric-sub">${topFinisher.name}</div></div>
    <div class="metric-card"><div class="metric-label">Best net xG/GP (10+ GP)</div>
      <div class="metric-value">+${fmt(topNetXG.net_xg_pg)}</div>
      <div class="metric-sub">${topNetXG.name}</div></div>
    <div class="metric-card"><div class="metric-label">Goalie 1 GSAx</div>
      <div class="metric-value" style="color:var(--red-mid)">${sign(g1.total_gsax)}</div>
      <div class="metric-sub">${g1.sv_pct}% SV% · ${g1.games.length} games</div></div>
    <div class="metric-card warn"><div class="metric-label">Goalie 2 GSAx</div>
      <div class="metric-value">${sign(g2.total_gsax)}</div>
      <div class="metric-sub">${g2.sv_pct}% SV% · ${g2.games.length} games</div></div>
  `;

  // Summary radar
  const ctx = document.getElementById("ov-radar").getContext("2d");
  new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["Finishing quality","Shot danger","F possession","D possession","On-ice xG impact","Faceoffs","Goalie perf.","Scoring ch. conv."],
      datasets: [{
        data: [9,9,6,3,5,8,3,4],
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
          ${p.pts_pg   != null ? `<div class="pc-stat">Pts/GP <span>${fmt(p.pts_pg,2)}</span></div>` : ""}
          ${p.finishing!= null ? `<div class="pc-stat">Fin. <span>${fmt(p.finishing,2)}×</span></div>` : ""}
          <div class="pc-stat">CORSI <span>${fmtP(p.corsi)}</span></div>
          <div class="pc-stat">Net xG/GP <span>${sign(p.net_xg_pg)}</span></div>
          ${p.fo_n > 5 ? `<div class="pc-stat">FO% <span>${fmtP(p.fo_pct)}</span></div>` : ""}
        </div>
        ${!p.reliable ? `<div class="pc-note">⚠ Small sample (${p.gp} GP)</div>` : ""}
      </div>`).join("");
  }

  document.getElementById("roster-fwds").innerHTML = cards(fwds);
  document.getElementById("roster-dmen").innerHTML = cards(dmen);
}

/* ── Finishing ──────────────────────────────── */
function buildFinishing() {
  const r = PLAYERS.filter(p => p.reliable && p.finishing != null);

  // Goals vs xG chart
  const ctx = document.getElementById("fin-chart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: r.map(p => p.name.split(" ").slice(-1)[0]),
      datasets: [
        { label: "Actual goals/GP", data: r.map(p => p.goals_pg), backgroundColor: C.blue2, borderRadius: 3 },
        { label: "xG/GP (expected)", data: r.map(p => p.xg_pg), backgroundColor: "rgba(186,117,23,0.7)", borderRadius: 3 }
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
  const all = [...PLAYERS].sort((a,b) => b.xg_shot - a.xg_shot);
  const ctx2 = document.getElementById("xgshot-chart").getContext("2d");
  new Chart(ctx2, {
    type: "bar",
    data: {
      labels: all.map(p => p.name.split(" ").slice(-1)[0] + (p.pos === "D" ? " (D)" : "")),
      datasets: [{
        data: all.map(p => p.xg_shot),
        backgroundColor: all.map(p => p.xg_shot >= 1.5 ? C.red : p.xg_shot >= 0.7 ? C.amber : C.green),
        borderRadius: 3
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        title: { display: true, text: "xG per shot — red = high danger slot · yellow = medium · green = perimeter", color: C.text, font: { size: 11 }, align: "start" },
        tooltip: { callbacks: { label: ctx => ` ${fmt(ctx.raw,2)} xG/shot (${all[ctx.dataIndex].gp} GP)` } }
      },
      scales: {
        x: { ticks: { color: C.text, font: { size: 11 }, maxRotation: 30 }, grid: { display: false } },
        y: { beginAtZero: true, ticks: { color: C.text }, grid: { color: C.grid } }
      }
    }
  });
}

/* ── Possession ─────────────────────────────── */
function buildPossession() {
  const sorted = [...PLAYERS].sort((a,b) => b.corsi - a.corsi);
  const ctx = document.getElementById("corsi-chart").getContext("2d");
  new Chart(ctx, {
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
}

/* ── On-Ice Impact ──────────────────────────── */
function buildOnIce() {
  const reliable = PLAYERS.filter(p => p.reliable).sort((a,b) => b.net_xg_pg - a.net_xg_pg);
  const ctx = document.getElementById("netxg-chart").getContext("2d");
  new Chart(ctx, {
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
}

/* ── Goalies ────────────────────────────────── */
function buildGoalies() {
  GOALIES.forEach((g, gi) => {
    // Summary cards
    document.getElementById(`g${gi+1}-saves`).textContent  = `${g.total_saves}/${g.total_shots}`;
    document.getElementById(`g${gi+1}-svpct`).textContent  = `${g.sv_pct}%`;
    document.getElementById(`g${gi+1}-gsax`).textContent   = (g.total_gsax > 0 ? "+" : "") + g.total_gsax;
    document.getElementById(`g${gi+1}-gsax`).className = g.total_gsax >= 0 ? "hi" : "lo";
    document.getElementById(`g${gi+1}-xga`).textContent    = g.total_xga;

    // Game log
    const el = document.getElementById(`g${gi+1}-games`);
    el.innerHTML = g.games.map(gm => {
      const result = gm.score.startsWith("W") ? "W" : "L";
      const barColor = gm.sv_pct >= 92 ? "#639922" : gm.sv_pct >= 85 ? "#EF9F27" : "#E24B4A";
      const gsaxClass = gm.gsax >= 0 ? "pos" : "neg";
      return `<div class="goalie-game">
        <div class="gg-header">
          <span class="gg-opp">${gm.opp}</span>
          <span class="gg-score-badge ${result}">${gm.score}</span>
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
  const allGames = [
    ...GOALIES[0].games.map(g => ({ label: "G1: " + g.opp.replace(/^(vs |@ )/, "").split(" ").slice(0,3).join(" "), gsax: g.gsax })),
    ...GOALIES[1].games.map(g => ({ label: "G2: " + g.opp.replace(/^(vs |@ )/, "").split(" ").slice(0,3).join(" "), gsax: g.gsax })),
  ];
  const ctx = document.getElementById("goalie-chart").getContext("2d");
  new Chart(ctx, {
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
        title: { display: true, text: "GSAx per game — green = outperformed xGA · red = underperformed · first 4 = G1, last 5 = G2", color: C.text, font: { size: 11 }, align: "start" },
        tooltip: { callbacks: { label: ctx => ` GSAx: ${(ctx.raw > 0 ? "+" : "") + fmt(ctx.raw,2)}` } }
      },
      scales: {
        x: { ticks: { color: C.text, font: { size: 10 }, maxRotation: 30 }, grid: { display: false } },
        y: { ticks: { color: C.text, callback: v => (v > 0 ? "+" : "") + v }, grid: { color: C.grid } }
      }
    }
  });
}

/* ── Strengths & Weaknesses ─────────────────── */
function buildScouting() {
  document.getElementById("strengths-list").innerHTML = STRENGTHS.map(s => `
    <div class="sw-item"><strong>${s.title}</strong>${s.body}</div>`).join("");
  document.getElementById("weaknesses-list").innerHTML = WEAKNESSES.map(w => `
    <div class="sw-item"><strong>${w.title}</strong>${w.body}</div>`).join("");

  const ctx = document.getElementById("sw-radar").getContext("2d");
  new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["Finishing quality","Shot danger (xG/shot)","F possession","D possession","On-ice xG impact","FO strength","Goalie perf.","ScCh conversion"],
      datasets: [{
        data: [9,9,6,3,5,8,3,4],
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
