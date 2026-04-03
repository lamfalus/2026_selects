/* ── 2012 RED SELECTS ──────────────────────────────────────────── */

const RED_TEAM_NAME = "2012 Red Selects";

const RED_PLAYERS = [
  {
    name: "Leo Van Mierlo", pos: "F", team: "Jr. Kings 13AAA", gp: 21, reliable: true,
    goals_pg: 0.619, xg_pg: 0.276, goals_minus_xg: 0.343, finishing: 2.24, xg_shot: 1.39,
    pts_pg: 1.190, ast_pg: 0.571, plusminus_pg: 0.33, net_xg_pg: 0.162,
    corsi: 56, fenwick: 54, fo_pct: 51, fo_n: 324, sc_pct: 21,
    hits_pg: 0.24, blocks_pg: 0.76, shotblk_pg: 0.57, sog_pg: 2.48
  },
  {
    name: "Jack Leibowitz", pos: "F", team: "Jr. Kings 14AAA", gp: 16, reliable: true,
    goals_pg: 0.500, xg_pg: 0.375, goals_minus_xg: 0.125, finishing: 1.33, xg_shot: 1.64,
    pts_pg: 1.062, ast_pg: 0.562, plusminus_pg: 0.62, net_xg_pg: 0.500,
    corsi: 58, fenwick: 57, fo_pct: 51, fo_n: 291, sc_pct: 15,
    hits_pg: 0.12, blocks_pg: 0.38, shotblk_pg: 0.19, sog_pg: 2.38
  },
  {
    name: "Noah Mahery Moreau", pos: "F", team: "Jr. Ducks 14AAA", gp: 28, reliable: true,
    goals_pg: 0.250, xg_pg: 0.214, goals_minus_xg: 0.036, finishing: 1.17, xg_shot: 1.82,
    pts_pg: 0.750, ast_pg: 0.500, plusminus_pg: -0.39, net_xg_pg: 0.129,
    corsi: 48, fenwick: 47, fo_pct: 17, fo_n: 6, sc_pct: 16,
    hits_pg: 0.36, blocks_pg: 0.39, shotblk_pg: 0.14, sog_pg: 1.61
  },
  {
    name: "Oscar Poupyrev", pos: "F", team: "Jr. Sharks 13AAA", gp: 48, reliable: true,
    goals_pg: 0.229, xg_pg: 0.208, goals_minus_xg: 0.021, finishing: 1.10, xg_shot: 2.90,
    pts_pg: 0.562, ast_pg: 0.333, plusminus_pg: -0.31, net_xg_pg: -0.229,
    corsi: 49, fenwick: 47, fo_pct: 45, fo_n: 11, sc_pct: 12,
    hits_pg: 0.31, blocks_pg: 0.60, shotblk_pg: 0.40, sog_pg: 1.94
  },
  {
    name: "Christopher Gaudet Jr.", pos: "F", team: "Jr. Kings 13AAA", gp: 19, reliable: true,
    goals_pg: 0.053, xg_pg: 0.065, goals_minus_xg: -0.012, finishing: 0.82, xg_shot: 0.68,
    pts_pg: 0.263, ast_pg: 0.211, plusminus_pg: 0.53, net_xg_pg: -0.014,
    corsi: 51, fenwick: 47, fo_pct: null, fo_n: 1, sc_pct: 10,
    hits_pg: 0.05, blocks_pg: 0.26, shotblk_pg: 0.11, sog_pg: 0.53
  },
  {
    name: "Yuanheng Su", pos: "D", team: "Jr. Ducks 13", gp: 19, reliable: true,
    goals_pg: 0.053, xg_pg: 0.038, goals_minus_xg: 0.015, finishing: 1.39, xg_shot: 0.24,
    pts_pg: 0.105, ast_pg: 0.053, plusminus_pg: 0.42, net_xg_pg: -0.087,
    corsi: 44, fenwick: 43, fo_pct: null, fo_n: 0, sc_pct: 33,
    hits_pg: 0.21, blocks_pg: 0.68, shotblk_pg: 1.26, sog_pg: 0.42
  },
  {
    name: "Gavin Krieger", pos: "D", team: "Jr. Kings 13AAA", gp: 21, reliable: true,
    goals_pg: 0.048, xg_pg: 0.042, goals_minus_xg: 0.006, finishing: 1.14, xg_shot: 0.20,
    pts_pg: 0.333, ast_pg: 0.286, plusminus_pg: 0.33, net_xg_pg: -0.248,
    corsi: 52, fenwick: 50, fo_pct: null, fo_n: 0, sc_pct: null,
    hits_pg: 0.10, blocks_pg: 0.95, shotblk_pg: 0.81, sog_pg: 1.33
  },
  {
    name: "William Ivmark", pos: "D", team: "Jr. Sharks 13AAA", gp: 47, reliable: true,
    goals_pg: 0.043, xg_pg: 0.053, goals_minus_xg: -0.010, finishing: 0.81, xg_shot: 0.91,
    pts_pg: 0.213, ast_pg: 0.170, plusminus_pg: -0.30, net_xg_pg: -0.532,
    corsi: 44, fenwick: 42, fo_pct: null, fo_n: 0, sc_pct: null,
    hits_pg: 0.15, blocks_pg: 0.79, shotblk_pg: 0.83, sog_pg: 1.21
  },
  // Small sample players
  {
    name: "Markus Hatol", pos: "F", team: "TVB 14AA", gp: 4, reliable: false,
    goals_pg: 0.250, xg_pg: 0.355, goals_minus_xg: -0.105, finishing: 0.70, xg_shot: 0.26,
    pts_pg: 1.250, ast_pg: 1.000, plusminus_pg: 1.25, net_xg_pg: 1.050,
    corsi: 65, fenwick: 66, fo_pct: 47, fo_n: 72, sc_pct: null,
    hits_pg: 0.25, blocks_pg: 0.75, shotblk_pg: 0.25, sog_pg: 3.75
  },
  {
    name: "Nicholas Bobolia", pos: "F", team: "Golden Bears", gp: 2, reliable: false,
    goals_pg: 0.500, xg_pg: 0.325, goals_minus_xg: 0.175, finishing: 1.54, xg_shot: 0.13,
    pts_pg: 1.000, ast_pg: 0.500, plusminus_pg: 1.50, net_xg_pg: 1.050,
    corsi: 49, fenwick: 47, fo_pct: 63, fo_n: 8, sc_pct: 20,
    hits_pg: 1.50, blocks_pg: 0.50, shotblk_pg: null, sog_pg: 4.50
  },
  {
    name: "Bryson Pence", pos: "F", team: "Ice Dogs", gp: 2, reliable: false,
    goals_pg: 0.500, xg_pg: 0.615, goals_minus_xg: -0.115, finishing: 0.81, xg_shot: 0.21,
    pts_pg: 0.500, ast_pg: null, plusminus_pg: 0.50, net_xg_pg: 0.420,
    corsi: 43, fenwick: 43, fo_pct: 43, fo_n: 30, sc_pct: 10,
    hits_pg: null, blocks_pg: 0.50, shotblk_pg: null, sog_pg: 4.50
  },
  {
    name: "Drake Staib", pos: "F", team: "Jr. Reign 14AA", gp: 3, reliable: false,
    goals_pg: null, xg_pg: 0.103, goals_minus_xg: null, finishing: null, xg_shot: 0.10,
    pts_pg: 0.333, ast_pg: 0.333, plusminus_pg: -0.33, net_xg_pg: -0.123,
    corsi: 64, fenwick: 58, fo_pct: null, fo_n: 0, sc_pct: null,
    hits_pg: null, blocks_pg: 0.33, shotblk_pg: null, sog_pg: 1.00
  },
  {
    name: "Jay Mendoza", pos: "F", team: "TVB 14AA", gp: 4, reliable: false,
    goals_pg: null, xg_pg: 0.077, goals_minus_xg: null, finishing: null, xg_shot: 0.11,
    pts_pg: null, ast_pg: null, plusminus_pg: 0.25, net_xg_pg: 0.550,
    corsi: 72, fenwick: 76, fo_pct: 50, fo_n: 4, sc_pct: null,
    hits_pg: null, blocks_pg: 0.75, shotblk_pg: null, sog_pg: 1.25
  },
  {
    name: "Enzo Buscaglia", pos: "D", team: "Jr. Reign 14AA", gp: 3, reliable: false,
    goals_pg: null, xg_pg: 0.150, goals_minus_xg: null, finishing: null, xg_shot: 0.10,
    pts_pg: 0.667, ast_pg: 0.667, plusminus_pg: 1.67, net_xg_pg: 1.233,
    corsi: 70, fenwick: 72, fo_pct: null, fo_n: 0, sc_pct: null,
    hits_pg: null, blocks_pg: 1.33, shotblk_pg: 0.33, sog_pg: 1.67
  },
  {
    name: "Maximus Tansill", pos: "D", team: "Jr. Kings 14AA", gp: 5, reliable: false,
    goals_pg: null, xg_pg: 0.102, goals_minus_xg: null, finishing: null, xg_shot: 0.14,
    pts_pg: null, ast_pg: null, plusminus_pg: 0.80, net_xg_pg: 0.520,
    corsi: 67, fenwick: 68, fo_pct: null, fo_n: 0, sc_pct: null,
    hits_pg: 0.60, blocks_pg: 0.40, shotblk_pg: 1.00, sog_pg: 1.60
  },
  {
    name: "Nicholas Edwards", pos: "D", team: "TVB 14AA", gp: 4, reliable: false,
    goals_pg: null, xg_pg: 0.128, goals_minus_xg: null, finishing: null, xg_shot: 0.11,
    pts_pg: null, ast_pg: null, plusminus_pg: 1.25, net_xg_pg: 1.350,
    corsi: 74, fenwick: 71, fo_pct: null, fo_n: 0, sc_pct: null,
    hits_pg: 0.25, blocks_pg: 1.75, shotblk_pg: 0.25, sog_pg: 3.00
  },
  {
    name: "Alexander Dragescu", pos: "D", team: "Mavs 14AA", gp: 3, reliable: false,
    goals_pg: null, xg_pg: 0.150, goals_minus_xg: null, finishing: null, xg_shot: 0.11,
    pts_pg: null, ast_pg: null, plusminus_pg: -3.67, net_xg_pg: -2.333,
    corsi: 15, fenwick: 13, fo_pct: 75, fo_n: 8, sc_pct: null,
    hits_pg: 1.67, blocks_pg: null, shotblk_pg: 1.67, sog_pg: 2.33
  }
];

const RED_GOALIES = [
  {
    id: "G1",
    name: "Logan Morgida",
    games: [
      { opp: "vs Windy City Storm 13U AAA",      score: "W 3-1", ga: 1,  xga: 0.91, sv_pct: 95, saves: 21, shots: 22, gsax: -0.09 },
      { opp: "@ NJ Rockets 13U AAA",             score: "L 3-7", ga: 7,  xga: 2.20, sv_pct: 84, saves: 37, shots: 44, gsax: -4.80 },
      { opp: "@ Minuteman Flames (partial)",      score: "L 3-5", ga: 1,  xga: 0.43, sv_pct: 67, saves: 2,  shots: 3,  gsax: -0.57 },
      { opp: "vs Minuteman Flames 13U",           score: "W 3-1", ga: 1,  xga: 4.80, sv_pct: 97, saves: 37, shots: 38, gsax:  3.80 }
    ]
  },
  {
    id: "G2",
    name: "Grason Clinger",
    games: [
      { opp: "@ Golden State Eagles U14 AA",      score: "W 6-3", ga: 3, xga: 2.20, sv_pct: 90, saves: 27, shots: 30, gsax: -0.80 },
      { opp: "@ Jr. Ducks 12U AA-2 (game 1)",     score: "W 4-3", ga: 3, xga: 3.70, sv_pct: 90, saves: 26, shots: 29, gsax:  0.70 },
      { opp: "@ Jr. Ducks 12U AA-2 (game 2)",     score: "L 3-5", ga: 4, xga: 1.42, sv_pct: 83, saves: 20, shots: 24, gsax: -2.58 },
      { opp: "@ Jr. Ducks 11U AA",                score: "W 4-3", ga: 3, xga: 1.43, sv_pct: 88, saves: 23, shots: 26, gsax: -1.57 },
      { opp: "vs Victory Honda 12U AAA",           score: "L 2-3", ga: 3, xga: 1.34, sv_pct: 86, saves: 18, shots: 21, gsax: -1.66 }
    ]
  }
];

RED_GOALIES.forEach(g => {
  g.total_saves  = g.games.reduce((s,x) => s + x.saves, 0);
  g.total_shots  = g.games.reduce((s,x) => s + x.shots, 0);
  g.total_ga     = g.games.reduce((s,x) => s + x.ga,    0);
  g.total_xga    = +g.games.reduce((s,x) => s + x.xga,  0).toFixed(2);
  g.total_gsax   = +g.games.reduce((s,x) => s + x.gsax, 0).toFixed(2);
  g.sv_pct       = +((g.total_saves / g.total_shots) * 100).toFixed(1);
  g.gsax_pg      = +(g.total_gsax / g.games.length).toFixed(2);
});

const RED_STRENGTHS = [
  { title: "Van Mierlo: elite finisher", body: "2.24× finishing ratio over 21 GP. He converts more than double the goals his shot quality predicts — over this many games, that's skill, not variance." },
  { title: "Top-line shot quality is elite", body: "Poupyrev (2.90 xG/shot, 48 GP), Moreau (1.82), Leibowitz (1.64). The entire top group consistently attacks the inner slot from high-danger positions." },
  { title: "Leibowitz drives on-ice xG", body: "+0.50 net xG/GP over 16 GP and 58% CORSI. When he's on the ice the team materially outchances opponents. He is the most impactful player by advanced metrics." },
  { title: "Center faceoff depth", body: "Van Mierlo (324 draws, 51%) and Leibowitz (291 draws, 51%) take nearly all important draws. The team doesn't lose possession after stoppages at the top end." },
  { title: "Krieger: only positive-possession D", body: "52% CORSI and 0.95 blocks/GP over 21 GP. The only D with a meaningful sample above 50% CORSI — he's both controlling play and providing a physical presence." },
  { title: "Morgida has a proven ceiling", body: "97% SV% against 4.80 xGA in one game is real evidence he can steal a game when the team needs it most." }
];

const RED_WEAKNESSES = [
  { title: "D corps are possession liabilities", body: "Ivmark (44% CORSI, −0.53 net xG/GP over 47 GP) and Su (44%, −0.09 over 19 GP) are the two most data-reliable D readings. Both are below 50%. The defensive zone is under sustained pressure when they're on." },
  { title: "Poupyrev is net-negative on-ice", body: "Despite 48 GP and 2.90 xG/shot, his net xG/GP is −0.23. He finds elite shooting positions individually but the team gives up more xG than it creates while he's on the ice." },
  { title: "Moreau's +/- contradicts net xG", body: "Net xG/GP is +0.13 (team outchances opponents) but +/-/GP is −0.39. Consistently on the ice for goals against despite positive possession metrics — a warning sign." },
  { title: "Clinger is GSAx −5.91 over 5 games", body: "Only one game above expected goals allowed. She is systematically allowing more than the defense earns and is an active liability most nights." },
  { title: "Morgida is also net-negative overall", body: "GSAx −1.66 total is rescued by one outlier game (+3.80). Across the other three games he is −5.46 combined. Strip the outlier and both goalies are the same problem." },
  { title: "Low scoring chance conversion", body: "Mierlo 21%, Leibowitz 15%, Poupyrev 12%, Moreau 16%. They create volume but leave a lot on the table. A sharp goalie will contain this team." }
];

const RED_GAME_PLAN = [
  { n: 1, title: "Pressure Ivmark and Su on breakouts", body: "Both are 44% CORSI on reliable, large samples — the most trustworthy D readings in the dataset. They lose puck battles in their own zone. A sustained forecheck targeting their exits generates turnovers and keeps shifts in the offensive zone." },
  { n: 2, title: "Shadow Leibowitz — he is the most dangerous player by net xG/GP", body: "+0.50 net xG/GP and 58% CORSI over 16 GP makes him the single most impactful player on this team. Assign your best two-way forward to him. If he's neutralized, this team loses its best possession driver and a scoring center simultaneously." },
  { n: 3, title: "Don't let Van Mierlo settle — he converts at 2.24× xG", body: "His shot quality (1.39 xG/shot) is real but not elite — what makes him dangerous is his elite finishing. Deny him clean looks and force contested attempts from bad angles. His finishing ratio drops if he's shooting off-balance or from the perimeter." },
  { n: 4, title: "Contest Poupyrev physically — net-negative despite elite shot quality", body: "2.90 xG/shot means every slot access is dangerous. But his −0.23 net xG/GP over 48 GP means he's already a break-even player on-ice — physical play pushes him into the negative and limits clean looks." },
  { n: 5, title: "Attack Clinger early — consistently below expected performance", body: "GSAx −5.91 over 5 games, only one above-expectation start. Early hard slot shots before she's set, screens, and rebound battles in the inner slot replicate conditions where she has underperformed by the widest margin." },
  { n: 6, title: "Exploit scoring chance conversion gaps", body: "Poupyrev 12%, Leibowitz 15%, Moreau 16%, Mierlo 21% scoring chance conversion. A hot goalie neutralizes this team. Position and rebound control matter more than shutting out attempts entirely." },
  { n: 7, title: "Target faceoffs against Poupyrev and Moreau", body: "Mierlo and Leibowitz at 51% on hundreds of draws are tough. But Poupyrev takes only 11 draws in 48 GP (45% win rate) and Moreau only 6 in 28 GP. Line-match your center against anyone other than these two centers for an immediate possession edge." }
];

const RED_RADAR_DATA = [9, 9, 6, 3, 5, 8, 3, 4];

const RED_OVERVIEW_FINDINGS = {
  strengths: [
    "Van Mierlo: 2.24× finishing ratio (21 GP)",
    "Leibowitz: +0.50 net xG/GP — best on-ice impact",
    "Poupyrev: 2.90 xG/shot over 48 GP",
    "Faceoff depth: two centers at 51% on 300+ draws"
  ],
  weaknesses: [
    "Ivmark &amp; Su: both 44% CORSI on large samples",
    "Ivmark: −0.53 net xG/GP over 47 GP",
    "Clinger: GSAx −5.91 over 5 games",
    "Poupyrev: −0.23 net xG/GP despite 48 GP"
  ]
};

const RED_POSS_FOOTNOTE = "* Gaudet Jr.'s 100% FO = 1 draw taken — not meaningful. ScCh% = scoring chance conversion rate.";

const RED_GOALIE_NOTE = "Morgida note: aggregate is rescued by one outlier game (+3.80 GSAx vs 4.80 xGA). Strip that and he is −5.46 over the other 3 games. Both goalies show the same underlying problem.";


/* ── 2012 ROYAL SELECTS ────────────────────────────────────────── */

const ROYAL_TEAM_NAME = "2012 Royal Selects";

const ROYAL_PLAYERS = [
  {
    name: "Lukas Alonzo", pos: "D", team: "GoldenBears", gp: 1, reliable: false,
    goals_pg: 0.000, xg_pg: 0.010, goals_minus_xg: -0.010, finishing: 0.00, xg_shot: 0.01,
    pts_pg: 0.000, ast_pg: 0.000, plusminus_pg: 2.00, net_xg_pg: 0.290,
    corsi: 64, fenwick: 70, fo_pct: null, fo_n: 0, sc_pct: null,
    hits_pg: 0.00, blocks_pg: 0.00, shotblk_pg: null, sog_pg: 1.00
  },
  {
    name: "Colton John", pos: "F", team: "IceDogs", gp: 2, reliable: false,
    goals_pg: 1.000, xg_pg: 0.650, goals_minus_xg: 0.350, finishing: 1.54, xg_shot: 0.23,
    pts_pg: 1.500, ast_pg: 0.500, plusminus_pg: 0.50, net_xg_pg: 0.400,
    corsi: 47, fenwick: 48, fo_pct: null, fo_n: 2, sc_pct: null,
    hits_pg: 0.00, blocks_pg: 1.50, shotblk_pg: null, sog_pg: 3.00
  },
  {
    name: "Ryan Lee", pos: "F", team: "Jr. Ducks", gp: 19, reliable: true,
    goals_pg: 0.368, xg_pg: 0.368, goals_minus_xg: 0.000, finishing: 1.00, xg_shot: 1.82,
    pts_pg: 1.316, ast_pg: 0.947, plusminus_pg: 0.26, net_xg_pg: 0.474,
    corsi: 53, fenwick: 51, fo_pct: 52, fo_n: 69, sc_pct: null,
    hits_pg: 0.526, blocks_pg: 0.368, shotblk_pg: 0.421, sog_pg: 2.47
  },
  {
    name: "Aaron Zhou", pos: "F", team: "Jr. Ducks", gp: 19, reliable: true,
    goals_pg: 0.316, xg_pg: 0.205, goals_minus_xg: 0.111, finishing: 1.54, xg_shot: 1.81,
    pts_pg: 0.632, ast_pg: 0.316, plusminus_pg: -0.16, net_xg_pg: -0.289,
    corsi: 48, fenwick: 46, fo_pct: 60, fo_n: 309, sc_pct: null,
    hits_pg: 0.421, blocks_pg: 0.158, shotblk_pg: 0.158, sog_pg: 1.63
  },
  {
    name: "Jayhe Lee", pos: "D", team: "Jr. Ducks", gp: 12, reliable: true,
    goals_pg: 0.083, xg_pg: 0.112, goals_minus_xg: -0.028, finishing: 0.75, xg_shot: 0.34,
    pts_pg: 0.333, ast_pg: 0.250, plusminus_pg: 0.42, net_xg_pg: 0.233,
    corsi: 53, fenwick: 53, fo_pct: null, fo_n: 0, sc_pct: null,
    hits_pg: 0.00, blocks_pg: 1.00, shotblk_pg: null, sog_pg: 2.17
  },
  {
    name: "Logan Lora", pos: "D", team: "Jr. Ducks", gp: 9, reliable: false,
    goals_pg: 0.000, xg_pg: 0.013, goals_minus_xg: -0.013, finishing: 0.00, xg_shot: 0.07,
    pts_pg: 0.000, ast_pg: 0.000, plusminus_pg: -0.11, net_xg_pg: -0.267,
    corsi: 45, fenwick: 45, fo_pct: null, fo_n: 0, sc_pct: null,
    hits_pg: 0.111, blocks_pg: 0.556, shotblk_pg: null, sog_pg: 0.44
  },
  {
    name: "Albert Liu", pos: "D", team: "Jr. Kings", gp: 15, reliable: true,
    goals_pg: 0.133, xg_pg: 0.112, goals_minus_xg: 0.021, finishing: 1.19, xg_shot: 0.37,
    pts_pg: 0.800, ast_pg: 0.667, plusminus_pg: 0.93, net_xg_pg: 0.400,
    corsi: 63, fenwick: 63, fo_pct: null, fo_n: 0, sc_pct: null,
    hits_pg: 0.200, blocks_pg: 0.600, shotblk_pg: null, sog_pg: 1.53
  },
  {
    name: "Leo Mikaelian", pos: "F", team: "Jr. Kings", gp: 21, reliable: true,
    goals_pg: 1.095, xg_pg: 0.714, goals_minus_xg: 0.381, finishing: 1.53, xg_shot: 1.91,
    pts_pg: 1.905, ast_pg: 0.810, plusminus_pg: 0.62, net_xg_pg: 0.333,
    corsi: 60, fenwick: 59, fo_pct: 56, fo_n: 474, sc_pct: null,
    hits_pg: 0.286, blocks_pg: 0.905, shotblk_pg: null, sog_pg: 5.48
  },
  {
    name: "Aatid 'Spark' Davila", pos: "F", team: "Jr. Kings", gp: 21, reliable: true,
    goals_pg: 0.286, xg_pg: 0.271, goals_minus_xg: 0.014, finishing: 1.05, xg_shot: 1.93,
    pts_pg: 0.571, ast_pg: 0.286, plusminus_pg: 0.38, net_xg_pg: 0.205,
    corsi: 56, fenwick: 55, fo_pct: 75, fo_n: 12, sc_pct: null,
    hits_pg: 0.381, blocks_pg: 0.143, shotblk_pg: null, sog_pg: 1.48
  },
  {
    name: "Max Blake", pos: "D", team: "Jr. Kings", gp: 19, reliable: true,
    goals_pg: 0.053, xg_pg: 0.082, goals_minus_xg: -0.029, finishing: 0.65, xg_shot: 0.30,
    pts_pg: 0.474, ast_pg: 0.421, plusminus_pg: 0.47, net_xg_pg: 0.153,
    corsi: 58, fenwick: 58, fo_pct: null, fo_n: 0, sc_pct: null,
    hits_pg: 0.316, blocks_pg: 0.947, shotblk_pg: null, sog_pg: 2.84
  },
  {
    name: "Brayden Andrews", pos: "F", team: "Jr. Reign", gp: 3, reliable: false,
    goals_pg: 0.333, xg_pg: 0.277, goals_minus_xg: 0.057, finishing: 1.20, xg_shot: 0.39,
    pts_pg: 0.333, ast_pg: 0.000, plusminus_pg: -1.00, net_xg_pg: -0.243,
    corsi: 46, fenwick: 50, fo_pct: null, fo_n: 0, sc_pct: null,
    hits_pg: 0.00, blocks_pg: 0.00, shotblk_pg: null, sog_pg: 1.67
  },
  {
    name: "William Chan", pos: "F", team: "Jr. Sharks", gp: 48, reliable: true,
    goals_pg: 0.208, xg_pg: 0.250, goals_minus_xg: -0.042, finishing: 0.83, xg_shot: 3.50,
    pts_pg: 0.458, ast_pg: 0.250, plusminus_pg: -0.13, net_xg_pg: -0.167,
    corsi: 48, fenwick: 45, fo_pct: 38, fo_n: 13, sc_pct: null,
    hits_pg: 0.104, blocks_pg: 0.458, shotblk_pg: null, sog_pg: 1.88
  },
  {
    name: "Owen Hannan", pos: "D", team: "Jr. Sharks", gp: 46, reliable: true,
    goals_pg: 0.130, xg_pg: 0.126, goals_minus_xg: 0.004, finishing: 1.03, xg_shot: 1.07,
    pts_pg: 0.391, ast_pg: 0.261, plusminus_pg: -0.20, net_xg_pg: -0.283,
    corsi: 48, fenwick: 47, fo_pct: 38, fo_n: 8, sc_pct: null,
    hits_pg: 0.391, blocks_pg: 1.435, shotblk_pg: null, sog_pg: 2.33
  },
  {
    name: "Francis Boutet", pos: "D", team: "TVB", gp: 4, reliable: false,
    goals_pg: 0.250, xg_pg: 0.208, goals_minus_xg: 0.043, finishing: 1.20, xg_shot: 0.22,
    pts_pg: 0.750, ast_pg: 0.500, plusminus_pg: 2.25, net_xg_pg: 0.850,
    corsi: 61, fenwick: 65, fo_pct: 100, fo_n: 1, sc_pct: null,
    hits_pg: 0.00, blocks_pg: 0.75, shotblk_pg: null, sog_pg: 3.25
  },
  {
    name: "Jagger Parker", pos: "F", team: "TVB", gp: 3, reliable: false,
    goals_pg: 0.000, xg_pg: 0.607, goals_minus_xg: -0.607, finishing: 0.00, xg_shot: 0.42,
    pts_pg: 0.333, ast_pg: 0.333, plusminus_pg: 0.67, net_xg_pg: 1.233,
    corsi: 82, fenwick: 78, fo_pct: null, fo_n: 1, sc_pct: null,
    hits_pg: 0.333, blocks_pg: 1.333, shotblk_pg: null, sog_pg: 2.33
  },
  {
    name: "Ali Gad", pos: "F", team: "TVB", gp: 4, reliable: false,
    goals_pg: 0.000, xg_pg: 0.143, goals_minus_xg: -0.143, finishing: 0.00, xg_shot: 0.22,
    pts_pg: 0.000, ast_pg: 0.000, plusminus_pg: 1.25, net_xg_pg: 0.228,
    corsi: 62, fenwick: 61, fo_pct: 38, fo_n: 8, sc_pct: null,
    hits_pg: 0.500, blocks_pg: 0.500, shotblk_pg: null, sog_pg: 1.75
  }
];

const ROYAL_GOALIES = [
  {
    id: "G1",
    name: "Preston Miller",
    games: [
      { opp: "@ Revolution Elite 13U",         score: "—", ga: 1,  xga: 0.38, sv_pct: 88, saves: 7,  shots: 8,  gsax: -0.62 },
      { opp: "@ Mercer Chiefs 13U",             score: "—", ga: 0,  xga: 0.67, sv_pct: 100,saves: 7,  shots: 7,  gsax:  0.67 },
      { opp: "@ Red Bank Generals U13 AAA",     score: "—", ga: 4,  xga: 3.00, sv_pct: 83, saves: 20, shots: 24, gsax: -1.00 },
      { opp: "vs Valley Forge Minutemen 13U",   score: "—", ga: 4,  xga: 1.77, sv_pct: 81, saves: 17, shots: 21, gsax: -2.23 },
      { opp: "vs Genesis Hockey 13U A",         score: "—", ga: 3,  xga: 1.19, sv_pct: 88, saves: 23, shots: 26, gsax: -1.81 },
      { opp: "vs Washington Little Caps 13U",   score: "—", ga: 7,  xga: 3.30, sv_pct: 78, saves: 25, shots: 32, gsax: -3.70 },
      { opp: "vs Boston Jr. Eagles 13O AAA",    score: "—", ga: 0,  xga: 2.30, sv_pct: 100,saves: 18, shots: 18, gsax:  2.30 },
      { opp: "@ Phoenix Jr. Coyotes 13U AAA",  score: "—", ga: 5,  xga: 1.15, sv_pct: 79, saves: 19, shots: 24, gsax: -3.85 },
      { opp: "@ Tampa Bulls 14U AA",            score: "—", ga: 7,  xga: 2.40, sv_pct: 75, saves: 21, shots: 28, gsax: -4.60 },
      { opp: "vs Long Island Gulls 13U AAA",    score: "—", ga: 10, xga: 4.00, sv_pct: 74, saves: 28, shots: 38, gsax: -6.00 },
      { opp: "vs Long Island Arrows 13U AAA",   score: "—", ga: 1,  xga: 0.65, sv_pct: 92, saves: 11, shots: 12, gsax: -0.35 },
      { opp: "vs Ramapo Saints 13U AAA",        score: "—", ga: 0,  xga: 0.44, sv_pct: 100,saves: 9,  shots: 9,  gsax:  0.44 },
      { opp: "vs Mid Fairfield Rangers 13U",    score: "—", ga: 5,  xga: 2.30, sv_pct: 81, saves: 21, shots: 26, gsax: -2.70 },
      { opp: "@ Hartford Jr. Wolfpack (1)",     score: "—", ga: 5,  xga: 1.53, sv_pct: 75, saves: 15, shots: 20, gsax: -3.47 },
      { opp: "@ Hartford Jr. Wolfpack (2)",     score: "—", ga: 4,  xga: 2.70, sv_pct: 85, saves: 23, shots: 27, gsax: -1.30 },
      { opp: "vs Rochester Coalition 13U AAA",  score: "—", ga: 1,  xga: 0.40, sv_pct: 91, saves: 10, shots: 11, gsax: -0.60 },
      { opp: "@ 95 Giants 13U AAA",             score: "—", ga: 2,  xga: 2.10, sv_pct: 87, saves: 13, shots: 15, gsax:  0.10 },
      { opp: "vs St. Louis Knights U13 AA",     score: "—", ga: 2,  xga: 2.70, sv_pct: 95, saves: 40, shots: 42, gsax:  0.70 },
      { opp: "@ Madison Capitols 13U AAA",      score: "—", ga: 6,  xga: 4.00, sv_pct: 82, saves: 28, shots: 34, gsax: -2.00 },
      { opp: "vs Ohio Prospects 13U AAA",       score: "—", ga: 0,  xga: 0.48, sv_pct: 100,saves: 7,  shots: 7,  gsax:  0.48 },
      { opp: "vs Boston Jr. Terriers 13U AAA",  score: "—", ga: 4,  xga: 1.35, sv_pct: 76, saves: 13, shots: 17, gsax: -2.65 },
      { opp: "@ Vermont Catamounts 13O AAA",    score: "—", ga: 1,  xga: 0.46, sv_pct: 86, saves: 6,  shots: 7,  gsax: -0.54 },
      { opp: "@ Long Island Rebels 13U AA",     score: "—", ga: 6,  xga: 2.90, sv_pct: 84, saves: 32, shots: 38, gsax: -3.10 },
      { opp: "@ East Coast Militia 13U AAA",    score: "—", ga: 10, xga: 3.70, sv_pct: 75, saves: 30, shots: 40, gsax: -6.30 },
      { opp: "vs Syracuse Nationals 13U AAA",   score: "—", ga: 1,  xga: 1.12, sv_pct: 93, saves: 14, shots: 15, gsax:  0.12 }
    ]
  },
  {
    id: "G2",
    name: "Alexander Yi",
    games: [
      { opp: "@ Cupertino Cougars 14U A (1)",  score: "—", ga: 1, xga: 1.03, sv_pct: 94, saves: 15, shots: 16, gsax:  0.03 },
      { opp: "vs Cupertino Cougars 14U A (2)", score: "—", ga: 0, xga: 0.54, sv_pct: 100,saves: 5,  shots: 5,  gsax:  0.54 },
      { opp: "vs Cupertino Cougars 14U A (3)", score: "—", ga: 0, xga: 0.74, sv_pct: 100,saves: 12, shots: 12, gsax:  0.74 }
    ]
  },
  {
    id: "G3",
    name: "Ramon Zuniga #31",
    aggregate: true,
    gp: 25, total_saves: 499, total_shots: 584, total_ga: 85,
    total_xga: 52, sv_pct: 85.4,
    total_gsax: -33.0, gsax_pg: -1.32,
    sc_saves_pct: 61,
    note: "Season aggregate only — no game log available."
  }
];

ROYAL_GOALIES.filter(g => !g.aggregate).forEach(g => {
  g.total_saves = g.games.reduce((s,x) => s + x.saves, 0);
  g.total_shots = g.games.reduce((s,x) => s + x.shots, 0);
  g.total_ga    = g.games.reduce((s,x) => s + x.ga,    0);
  g.total_xga   = +g.games.reduce((s,x) => s + x.xga,  0).toFixed(2);
  g.total_gsax  = +g.games.reduce((s,x) => s + x.gsax, 0).toFixed(2);
  g.sv_pct      = +((g.total_saves / g.total_shots) * 100).toFixed(1);
  g.gsax_pg     = +(g.total_gsax / g.games.length).toFixed(2);
});

const ROYAL_STRENGTHS = [
  { title: "Mikaelian: elite scorer and finisher", body: "1.53× finishing ratio and 1.905 Pts/GP over 21 GP. He scores 53% more goals than his shot quality predicts. CORSI 60%, xG/shot 1.91 — he attacks from the inner slot and converts at a rate well above what the defense earns." },
  { title: "Albert Liu: best possession D in the pool", body: "63% CORSI, +0.40 net xG/GP over 15 GP. The strongest reliable-sample defenseman by both possession control and offensive production. He drives zone entries and activates from the blue line." },
  { title: "Ryan Lee: elite playmaker with positive impact", body: "+0.47 net xG/GP over 19 GP — the highest reliable net on-ice impact in the pool. 0.947 A/GP, CORSI 53%. His presence consistently translates to team outchancing opponents." },
  { title: "Jr. Kings bloc — strongest possession group", body: "All four Jr. Kings skaters post CORSI ≥ 56% on reliable samples. Collective puck control is the highest of any club represented in this pool." },
  { title: "Aaron Zhou: highest-volume faceoff center", body: "60% FO win rate on 309 draws — the largest faceoff sample in the pool by a wide margin. Meaningful rate on meaningful volume, giving the team a reliable possession tool off stoppages." }
];

const ROYAL_WEAKNESSES = [
  { title: "Preston Miller: systemic underperformance over 25 games", body: "GSAx −42.01, SV% 83.9% vs 47.0 xGA. Negative in 17 of 25 starts. Two catastrophic games (−6.3 and −6.0) are extreme outliers, but removing them still leaves a clear pattern of consistent underperformance." },
  { title: "Ramon Zuniga: below-expected at full-season scale", body: "GSAx −33.0 over 25 GP aggregate. 85.4% SV%, 61% scoring chance save rate. Consistent underperformance across a large sample — not explained by shot quality faced (xG/shot 0.089 is moderate)." },
  { title: "Chan & Hannan: Jr. Sharks liability pair", body: "Both post CORSI 48% on 46–48 GP — the most reliable samples in the pool. Chan: Net xG/GP −0.17. Hannan: Net xG/GP −0.28. Consistent possession liabilities on the largest data available." },
  { title: "Logan Lora: zero offense, worst CORSI among reliable players", body: "9 GP, CORSI 45%, Net xG/GP −0.27, 0 goals, 0 assists. Generates no offense and does not suppress opponent shots. A clear liability when deployed." },
  { title: "Aaron Zhou: faceoff wins not translating to possession", body: "Despite 60% on 309 draws, Zhou posts CORSI 48% and Net xG/GP −0.29. Winning the draw is not converting into sustained puck control or shot suppression." },
  { title: "Critical data gaps: 6 of 16 players under 8 GP", body: "GoldenBears (1 GP), IceDogs (2 GP), Jr. Reign (3 GP), TVB (3–4 GP). Any conclusion from these players is provisional. The Royal pool has fewer reliable samples than ideal for comprehensive scouting." }
];

const ROYAL_GAME_PLAN = [
  { n: 1, title: "Neutralize Leo Mikaelian (#17, Jr. Kings) — Primary Shutdown Objective", body: "1.905 Pts/GP, 1.53× finishing, CORSI 60%, Net xG/GP +0.33. His xG/shot of 1.91 means he attacks the inner slot consistently. Assign your best defensive pair, deny zone entries, force him wide. Do not give him clean crease access — he converts above what shot quality predicts." },
  { n: 2, title: "Attack Miller with sustained volume — systemic underperformer", body: "GSAx −42.01 at −1.68/GP over 25 games. SV% 83.9% vs 47.0 xGA. Two 10-goal games show the ceiling when pressure is sustained. Strategy: hold offensive zone, shoot on first opportunity, attack every rebound." },
  { n: 3, title: "Push possession hard against Chan & Hannan (Jr. Sharks)", body: "Both CORSI 48% on 46–48 GP — most data-reliable players in the pool and both liabilities. Chan Net xG/GP −0.17, Hannan −0.28. Drive the inner slot and sustain forechecking pressure — this pair cedes possession consistently." },
  { n: 4, title: "Win the puck back after Zhou faceoff wins", body: "Zhou wins 60% of 309 draws but posts CORSI 48% and Net xG/GP −0.29. Focus on immediate puck battles after his won draws — his line does not convert faceoff wins into sustained zone control." },
  { n: 5, title: "Exploit Logan Lora (#8, Jr. Ducks) — attack his defensive pairings", body: "CORSI 45%, Net xG/GP −0.27, zero points in 9 GP. Lowest shot quality generation (xG/shot 0.07) — no offensive threat to defend against. When Lora is on ice, push to the inner slot aggressively." },
  { n: 6, title: "Contain Albert Liu (#76, Jr. Kings) in transition", body: "CORSI 63%, Net xG/GP +0.40, 0.800 Pts/GP. He drives their offensive zone entries. Deny him the puck in the neutral zone — Liu is the catalyst for the Jr. Kings' sustained puck control." },
  { n: 7, title: "Attack Ramon Zuniga (#31) in scoring chance situations", body: "GSAx −33.0 over 25 GP aggregate. 61% scoring chance save rate means 39% of scoring chances convert. Prioritize inner-slot shots. xG/shot conceded is 0.089 — moderate quality, so his underperformance is not explained by difficult shots." }
];

const ROYAL_RADAR_DATA = [7, 6, 7, 5, 5, 6, 2, 4];

const ROYAL_OVERVIEW_FINDINGS = {
  strengths: [
    "Mikaelian: 1.53× finishing ratio (21 GP)",
    "Ryan Lee: +0.47 net xG/GP — best on-ice impact",
    "Albert Liu: 63% CORSI, +0.40 net xG/GP",
    "Jr. Kings: all four players ≥ 56% CORSI"
  ],
  weaknesses: [
    "Miller: GSAx −42.01 over 25 games (systemic)",
    "Chan & Hannan: both 48% CORSI on 46–48 GP",
    "Hannan: −0.28 net xG/GP over 46 GP",
    "Zhou: FO leader but CORSI 48%, Net xG/GP −0.29"
  ]
};

const ROYAL_POSS_FOOTNOTE = "* Davila's 75% FO = 12 draws taken — low volume. ScCh% not available for Royal players.";

const ROYAL_GOALIE_NOTE = "Preston Miller (25 GP): GSAx −42.01 across 25 games — systemic underperformance, negative in 17 of 25 starts. Two worst games (−6.3 and −6.0 GSAx) are extreme but strip them out and this goalie is still negative in the majority of starts. Ramon Zuniga (season aggregate, 25 GP): GSAx −33.0. Both primary goalies allow more than shot quality predicts at scale.";


/* ── 2012 GOLD SELECTS ─────────────────────────────────────────── */

const GOLD_TEAM_NAME = "2012 Gold Selects";

const GOLD_PLAYERS = [
  // ── RELIABLE SAMPLES (8+ GP) ──────────────────────────────
  {
    name: "Gannon Smith", pos: "F", team: "Jr. Sharks 13AAA", gp: 48, reliable: true,
    goals_pg: 0.940, xg_pg: 0.540, goals_minus_xg: 0.400, finishing: 1.73, xg_shot: 0.14,
    pts_pg: 1.520, ast_pg: 0.580, plusminus_pg: 0.29, net_xg_pg: 0.150,
    corsi: 55, fenwick: 54, fo_pct: 64, fo_n: 1007, sc_pct: null,
    hits_pg: 1.06, blocks_pg: 0.71, shotblk_pg: 0.63, sog_pg: 4.00
  },
  {
    name: "Santana King", pos: "F", team: "Reapers 13AAA", gp: 58, reliable: true,
    goals_pg: 0.280, xg_pg: 0.280, goals_minus_xg: 0.000, finishing: 1.00, xg_shot: 0.11,
    pts_pg: 0.760, ast_pg: 0.480, plusminus_pg: 0.26, net_xg_pg: 0.450,
    corsi: 69, fenwick: 69, fo_pct: 60, fo_n: 20, sc_pct: null,
    hits_pg: 0.36, blocks_pg: 0.64, shotblk_pg: 0.02, sog_pg: 2.43
  },
  {
    name: "Robert (Bobby) Mackay", pos: "F", team: "Jr. Ducks 13AAA", gp: 20, reliable: true,
    goals_pg: 0.600, xg_pg: 0.350, goals_minus_xg: 0.250, finishing: 1.71, xg_shot: 0.14,
    pts_pg: 1.150, ast_pg: 0.550, plusminus_pg: -0.20, net_xg_pg: 0.140,
    corsi: 50, fenwick: 48, fo_pct: 77, fo_n: 13, sc_pct: null,
    hits_pg: 0.15, blocks_pg: 0.55, shotblk_pg: 0.55, sog_pg: 2.55
  },
  {
    name: "Randolph Sung", pos: "F", team: "Jr. Kings 13AAA", gp: 20, reliable: true,
    goals_pg: 0.600, xg_pg: 0.450, goals_minus_xg: 0.150, finishing: 1.33, xg_shot: 0.16,
    pts_pg: 1.000, ast_pg: 0.400, plusminus_pg: 0.25, net_xg_pg: 0.090,
    corsi: 52, fenwick: 51, fo_pct: 42, fo_n: 266, sc_pct: null,
    hits_pg: 0.90, blocks_pg: 0.45, shotblk_pg: 0.60, sog_pg: 2.80
  },
  {
    name: "Boyd LeBlanc", pos: "F", team: "Jr. Ducks 13AAA", gp: 20, reliable: true,
    goals_pg: 0.350, xg_pg: 0.290, goals_minus_xg: 0.060, finishing: 1.21, xg_shot: 0.16,
    pts_pg: 0.900, ast_pg: 0.550, plusminus_pg: 0.35, net_xg_pg: 0.020,
    corsi: 49, fenwick: 49, fo_pct: 44, fo_n: 16, sc_pct: null,
    hits_pg: 0.30, blocks_pg: 0.30, shotblk_pg: 0.45, sog_pg: 1.85
  },
  {
    name: "Timofey Purvins", pos: "F", team: "Jr. Kings 13AAA", gp: 21, reliable: true,
    goals_pg: 0.290, xg_pg: 0.260, goals_minus_xg: 0.030, finishing: 1.09, xg_shot: 0.16,
    pts_pg: 0.760, ast_pg: 0.480, plusminus_pg: 0.76, net_xg_pg: 0.330,
    corsi: 61, fenwick: 58, fo_pct: 50, fo_n: 10, sc_pct: null,
    hits_pg: 0.38, blocks_pg: 0.48, shotblk_pg: 0.57, sog_pg: 1.67
  },
  {
    name: "Austin McDermott", pos: "D", team: "Jr. Kings 13AAA", gp: 20, reliable: true,
    goals_pg: 0.150, xg_pg: 0.120, goals_minus_xg: 0.030, finishing: 1.20, xg_shot: 0.06,
    pts_pg: 0.750, ast_pg: 0.600, plusminus_pg: 0.55, net_xg_pg: 0.250,
    corsi: 56, fenwick: 53, fo_pct: null, fo_n: 0, sc_pct: null,
    hits_pg: 0.15, blocks_pg: 1.40, shotblk_pg: 1.35, sog_pg: 2.25
  },
  {
    name: "Brody Betts", pos: "D", team: "Jr. Ducks 13AAA", gp: 18, reliable: true,
    goals_pg: 0.060, xg_pg: 0.070, goals_minus_xg: -0.010, finishing: 0.75, xg_shot: 0.08,
    pts_pg: 0.330, ast_pg: 0.280, plusminus_pg: 0.56, net_xg_pg: -0.040,
    corsi: 51, fenwick: 51, fo_pct: null, fo_n: 0, sc_pct: null,
    hits_pg: 0.22, blocks_pg: 0.39, shotblk_pg: 0.50, sog_pg: 0.89
  },
  {
    name: "Chris Pan", pos: "D", team: "Jr. Sharks 13AAA", gp: 48, reliable: true,
    goals_pg: 0.060, xg_pg: 0.060, goals_minus_xg: 0.000, finishing: 1.03, xg_shot: 0.05,
    pts_pg: 0.380, ast_pg: 0.310, plusminus_pg: -0.46, net_xg_pg: -0.420,
    corsi: 46, fenwick: 44, fo_pct: null, fo_n: 0, sc_pct: null,
    hits_pg: 0.06, blocks_pg: 0.69, shotblk_pg: 0.67, sog_pg: 1.33
  },
  // ── LIMITED SAMPLES (<8 GP) ───────────────────────────────
  {
    name: "Owen Colao", pos: "F", team: "TVB 14AA", gp: 4, reliable: false,
    goals_pg: 1.000, xg_pg: 0.720, goals_minus_xg: 0.280, finishing: 1.38, xg_shot: 0.14,
    pts_pg: 1.250, ast_pg: 0.250, plusminus_pg: 2.00, net_xg_pg: 1.300,
    corsi: 72, fenwick: 73, fo_pct: 60, fo_n: 86, sc_pct: null,
    hits_pg: 0.25, blocks_pg: 0.00, shotblk_pg: 0.00, sog_pg: 5.00
  },
  {
    name: "Enrique Martinez", pos: "F", team: "TVB 14AA", gp: 2, reliable: false,
    goals_pg: 1.500, xg_pg: 0.450, goals_minus_xg: 1.050, finishing: 3.33, xg_shot: 0.11,
    pts_pg: 1.500, ast_pg: 0.000, plusminus_pg: 1.00, net_xg_pg: 0.990,
    corsi: 74, fenwick: 73, fo_pct: 62, fo_n: 26, sc_pct: null,
    hits_pg: 0.00, blocks_pg: 1.00, shotblk_pg: 0.00, sog_pg: 4.00
  },
  {
    name: "Isaiah Ignacio", pos: "F", team: "Jr. Reign 14AA", gp: 3, reliable: false,
    goals_pg: 0.670, xg_pg: 0.410, goals_minus_xg: 0.260, finishing: 1.63, xg_shot: 0.12,
    pts_pg: 1.000, ast_pg: 0.330, plusminus_pg: 1.00, net_xg_pg: 0.470,
    corsi: 65, fenwick: 61, fo_pct: 70, fo_n: 23, sc_pct: null,
    hits_pg: 0.33, blocks_pg: 0.67, shotblk_pg: 0.33, sog_pg: 3.33
  },
  {
    name: "Tanner Zhao", pos: "D", team: "TVB 14AA", gp: 4, reliable: false,
    goals_pg: 0.000, xg_pg: 0.100, goals_minus_xg: -0.100, finishing: null, xg_shot: 0.10,
    pts_pg: 0.000, ast_pg: 0.000, plusminus_pg: 0.25, net_xg_pg: 0.700,
    corsi: 71, fenwick: 70, fo_pct: null, fo_n: 0, sc_pct: null,
    hits_pg: 0.00, blocks_pg: 0.25, shotblk_pg: 0.00, sog_pg: 1.00
  },
  {
    name: "Jordan Polanco", pos: "F", team: "IceDogs 14AA", gp: 1, reliable: false,
    goals_pg: 0.000, xg_pg: 0.530, goals_minus_xg: -0.530, finishing: null, xg_shot: 0.27,
    pts_pg: 2.000, ast_pg: 2.000, plusminus_pg: 4.00, net_xg_pg: 2.700,
    corsi: 78, fenwick: 73, fo_pct: null, fo_n: 0, sc_pct: null,
    hits_pg: 0.00, blocks_pg: 2.00, shotblk_pg: 0.00, sog_pg: 2.00
  },
  {
    name: "Dylan Junghanel", pos: "D", team: "IceDogs 14AA", gp: 1, reliable: false,
    goals_pg: 0.000, xg_pg: 0.340, goals_minus_xg: -0.340, finishing: null, xg_shot: 0.06,
    pts_pg: 0.000, ast_pg: 0.000, plusminus_pg: 1.00, net_xg_pg: 1.230,
    corsi: 59, fenwick: 54, fo_pct: null, fo_n: 0, sc_pct: null,
    hits_pg: 1.00, blocks_pg: 1.00, shotblk_pg: 2.00, sog_pg: 6.00
  },
  {
    name: "Andrew Vicente", pos: "D", team: "AVAvs 14AA", gp: 1, reliable: false,
    goals_pg: 1.000, xg_pg: 0.610, goals_minus_xg: 0.390, finishing: 1.64, xg_shot: 0.15,
    pts_pg: 2.000, ast_pg: 1.000, plusminus_pg: 0.00, net_xg_pg: 1.130,
    corsi: 41, fenwick: 42, fo_pct: 59, fo_n: 17, sc_pct: null,
    hits_pg: 0.00, blocks_pg: 2.00, shotblk_pg: 0.00, sog_pg: 4.00
  }
];

const GOLD_GOALIES = [
  {
    name: "Henry McDonald",
    games: [
      { opp: "@ St. Louis AAA Blues 13U",          score: "W 6-2",  ga: 1, xga: 0.74, sv_pct: 92, saves: 11, shots: 12, gsax: -0.26 },
      { opp: "vs San Jose Jr. Sharks 13O AAA",      score: "W 12-0", ga: 0, xga: 0.57, sv_pct: 100,saves: 10, shots: 10, gsax:  0.57 },
      { opp: "@ New Jersey Rockets 13U AAA",        score: "L 5-6",  ga: 6, xga: 5.40, sv_pct: 84, saves: 31, shots: 37, gsax: -0.60 },
      { opp: "@ Nashville Jr. Predators 13O AAA",   score: "W 3-2",  ga: 1, xga: 1.53, sv_pct: 93, saves: 14, shots: 15, gsax:  0.53 },
      { opp: "@ Nashville Jr. Predators 13O AAA",   score: "T 2-2",  ga: 2, xga: 2.80, sv_pct: 94, saves: 30, shots: 32, gsax:  0.80 },
      { opp: "vs San Jose Jr. Sharks 13O AAA",      score: "W 9-1",  ga: 1, xga: 1.17, sv_pct: 92, saves: 12, shots: 13, gsax:  0.17 },
      { opp: "vs Nashville Jr. Predators 13O AAA",  score: "L 1-5",  ga: 5, xga: 3.80, sv_pct: 88, saves: 36, shots: 41, gsax: -1.20 },
      { opp: "@ Honeybaked 13U AAA",                score: "L 1-3",  ga: 2, xga: 2.10, sv_pct: 93, saves: 26, shots: 28, gsax:  0.10 },
      { opp: "@ San Jose Jr. Sharks 13O AAA",       score: "W 8-1",  ga: 1, xga: 0.83, sv_pct: 92, saves: 11, shots: 12, gsax: -0.17 },
      { opp: "@ Team Illinois 13U AAA",             score: "L 1-5",  ga: 5, xga: 3.40, sv_pct: 90, saves: 47, shots: 52, gsax: -1.60 },
      { opp: "@ Cleveland Barons 2012 Elite",       score: "L 2-4",  ga: 4, xga: 3.00, sv_pct: 89, saves: 31, shots: 35, gsax: -1.00 },
      { opp: "vs Honeybaked 13U AAA",               score: "W 5-1",  ga: 1, xga: 1.60, sv_pct: 96, saves: 22, shots: 23, gsax:  0.60 },
      { opp: "@ Anaheim Jr. Ducks 13U AAA",         score: "W 7-1",  ga: 0, xga: 0.03, sv_pct: 100,saves: 1,  shots: 1,  gsax:  0.03 },
      { opp: "@ New Jersey Rockets 13U AAA",        score: "L 4-5",  ga: 5, xga: 3.20, sv_pct: 85, saves: 28, shots: 33, gsax: -1.80 }
    ]
  },
  {
    name: "Noah Min",
    games: [
      { opp: "@ Team Alaska 13U AAA",                      score: "L 5-9",  ga: 8, xga: 3.00, sv_pct: 73, saves: 22, shots: 30, gsax: -5.00 },
      { opp: "vs Vegas Jr. Golden Knights 13U AAA",        score: "W 3-0",  ga: 0, xga: 1.11, sv_pct: 100,saves: 21, shots: 21, gsax:  1.11 },
      { opp: "@ McKinney North Stars 14U AA",              score: "L 1-5",  ga: 5, xga: 2.80, sv_pct: 88, saves: 35, shots: 40, gsax: -2.20 },
      { opp: "vs Arvada 14U AA",                           score: "W 5-2",  ga: 2, xga: 3.60, sv_pct: 95, saves: 36, shots: 38, gsax:  1.60 },
      { opp: "vs McKinney North Stars 14U AA",             score: "L 1-2",  ga: 2, xga: 1.81, sv_pct: 91, saves: 20, shots: 22, gsax: -0.19 },
      { opp: "@ San Jose Jr. Sharks 14U AA",               score: "L 2-6",  ga: 5, xga: 2.10, sv_pct: 72, saves: 13, shots: 18, gsax: -2.90 },
      { opp: "vs Golden State Elite Eagles U14 AA",        score: "W 6-2",  ga: 2, xga: 1.33, sv_pct: 90, saves: 19, shots: 21, gsax: -0.67 },
      { opp: "vs Vegas Jr. Golden Knights 13U AAA",        score: "W 5-2",  ga: 1, xga: 0.60, sv_pct: 90, saves: 9,  shots: 10, gsax: -0.40 },
      { opp: "vs Vegas Jr. Golden Knights 13U AAA",        score: "W 6-1",  ga: 1, xga: 1.12, sv_pct: 93, saves: 14, shots: 15, gsax:  0.12 },
      { opp: "@ Trenton Blades 13U",                       score: "W 5-0",  ga: 0, xga: 0.17, sv_pct: 100,saves: 7,  shots: 7,  gsax:  0.17 },
      { opp: "@ Chicago Phantoms 13U AAA",                 score: "L 0-2",  ga: 1, xga: 2.60, sv_pct: 96, saves: 25, shots: 26, gsax:  1.60 },
      { opp: "vs Madison Capitols 13U AAA",                score: "T 3-3",  ga: 3, xga: 2.30, sv_pct: 91, saves: 31, shots: 34, gsax: -0.70 },
      { opp: "@ Los Angeles Jr. Kings 13U AAA",            score: "L 1-8",  ga: 8, xga: 3.40, sv_pct: 83, saves: 38, shots: 46, gsax: -4.60 },
      { opp: "@ Colorado Rampage 13U AAA",                 score: "W 10-1", ga: 1, xga: 0.65, sv_pct: 92, saves: 11, shots: 12, gsax: -0.35 },
      { opp: "@ Philadelphia Jr. Flyers 13U AAA",          score: "L 2-11", ga: 8, xga: 2.20, sv_pct: 56, saves: 10, shots: 18, gsax: -5.80 },
      { opp: "@ Colorado Thunderbirds 13U AAA",            score: "L 3-8",  ga: 8, xga: 3.20, sv_pct: 78, saves: 29, shots: 37, gsax: -4.80 },
      { opp: "vs Anaheim Jr. Ducks 13U AAA",               score: "L 4-6",  ga: 5, xga: 6.00, sv_pct: 90, saves: 43, shots: 48, gsax:  1.00 },
      { opp: "vs Phoenix Jr. Coyotes 13U AAA",             score: "L 1-4",  ga: 4, xga: 3.30, sv_pct: 89, saves: 31, shots: 35, gsax: -0.70 },
      { opp: "@ Anaheim Jr. Ducks 13U AAA",                score: "L 2-3",  ga: 3, xga: 2.60, sv_pct: 91, saves: 29, shots: 32, gsax: -0.40 },
      { opp: "@ Phoenix Jr. Coyotes 13U AAA",              score: "L 2-6",  ga: 6, xga: 4.30, sv_pct: 88, saves: 44, shots: 50, gsax: -1.70 },
      { opp: "vs Los Angeles Jr. Kings 13U AAA (P1)",      score: "L 1-8",  ga: 0, xga: 1.07, sv_pct: 100,saves: 10, shots: 10, gsax:  1.07 },
      { opp: "vs Los Angeles Jr. Kings 13U AAA (P2)",      score: "L 1-8",  ga: 8, xga: 4.60, sv_pct: 83, saves: 40, shots: 48, gsax: -3.40 },
      { opp: "vs Tampa Bulls 14U AA",                      score: "L 0-5",  ga: 5, xga: 3.50, sv_pct: 84, saves: 26, shots: 31, gsax: -1.50 },
      { opp: "@ Boston Jr. Terriers 13U AAA",              score: "L 2-5",  ga: 5, xga: 2.90, sv_pct: 89, saves: 40, shots: 45, gsax: -2.10 },
      { opp: "@ Anaheim Jr. Ducks 13U AAA",                score: "L 1-5",  ga: 4, xga: 3.60, sv_pct: 90, saves: 38, shots: 42, gsax: -0.40 },
      { opp: "vs Golden State Elite Eagles U14 AA",        score: "T 4-4",  ga: 0, xga: 0.25, sv_pct: 100,saves: 7,  shots: 7,  gsax:  0.25 },
      { opp: "@ Tri-Valley Bulls 14U AA",                  score: "L 1-5",  ga: 3, xga: 2.40, sv_pct: 90, saves: 26, shots: 29, gsax: -0.60 },
      { opp: "@ Colorado Rampage 13U AAA",                 score: "W 4-1",  ga: 1, xga: 3.60, sv_pct: 97, saves: 33, shots: 34, gsax:  2.60 },
      { opp: "@ Okanagan Colorado OHC 13U",                score: "L 1-2",  ga: 2, xga: 2.90, sv_pct: 95, saves: 35, shots: 37, gsax:  0.90 },
      { opp: "@ San Jose Jr. Sharks 14U AA",               score: "L 0-2",  ga: 2, xga: 4.40, sv_pct: 94, saves: 34, shots: 36, gsax:  2.40 }
    ]
  },
  {
    name: "Calib James",
    games: [
      { opp: "vs NYC Hockey Club 13U AAA",     score: "W 6-3", ga: 3, xga: 2.80, sv_pct: 90, saves: 27, shots: 30, gsax: -0.20 },
      { opp: "@ San Jose Jr. Sharks 14U AA",   score: "W 3-0", ga: 0, xga: 1.42, sv_pct: 100,saves: 19, shots: 19, gsax:  1.42 },
      { opp: "@ NYC Hockey Club 13U AAA",      score: "L 2-3", ga: 3, xga: 2.10, sv_pct: 89, saves: 24, shots: 27, gsax: -0.90 }
    ]
  }
];

GOLD_GOALIES.forEach(g => {
  g.total_saves = g.games.reduce((s,x) => s + x.saves, 0);
  g.total_shots = g.games.reduce((s,x) => s + x.shots, 0);
  g.total_ga    = g.games.reduce((s,x) => s + x.ga,    0);
  g.total_xga   = +g.games.reduce((s,x) => s + x.xga,  0).toFixed(2);
  g.total_gsax  = +g.games.reduce((s,x) => s + x.gsax, 0).toFixed(2);
  g.sv_pct      = +((g.total_saves / g.total_shots) * 100).toFixed(1);
  g.gsax_pg     = +(g.total_gsax / g.games.length).toFixed(2);
});

const GOLD_STRENGTHS = [
  { title: "Elite Possession Core", body: "Santana King (CORSI 69%, 58 GP), Timofey Purvins (61%, 21 GP), and Austin McDermott (56%, 20 GP) form a possession engine that keeps the puck away from opponents. King's 69% is at the top of the AAA tier. Gannon Smith adds 55% CORSI over 48 games, making this a truly elite possession group up and down the lineup." },
  { title: "Clinical Finishers", body: "Gannon Smith (finishing ratio 1.73 over 48 GP) and Bobby Mackay (1.71 over 20 GP) are both proven clinical finishers — they consistently score more than their shot quality predicts. Smith's 45 goals on just 26.0 xG over 48 GP is an exceptional sustained performance. These are not small-sample anomalies." },
  { title: "Faceoff Weapon", body: "Gannon Smith took 1,007 faceoffs at 64% — a statistically massive sample at an elite winning rate. This gives the team reliable puck starts and sustained offensive-zone time. Randolph Sung (266 draws, 42%) adds volume at center, though his rate is below average and will require matchup management." },
  { title: "High-Volume Shooting", body: "Smith generates 4.00 SOG/GP and Sung 2.80 SOG/GP, both among the top rates in this sample. Combined with above-average xG/shot (0.14 for Smith), the offense generates both volume and quality." },
  { title: "Productive Top Three", body: "Smith (1.52 Pts/GP), Mackay (1.15), and Sung (1.00) all exceed 1.00 Pts/GP on reliable samples. The scoring depth from these three provides multiple threats that are difficult to neutralize simultaneously." }
];

const GOLD_WEAKNESSES = [
  { title: "Goalie Vulnerability — Noah Min", body: "Noah Min has a cumulative GSAx of −25.59 over 30 GP (−0.85/game) — he consistently allows more goals than shot quality predicts. Four games saw GSAx below −3.0, including −5.80 vs. Philadelphia and −5.00 vs. Team Alaska. This is the team's most significant liability. High-xGA environments will likely produce results below expected." },
  { title: "Chris Pan — Possession Liability", body: "Pan carries a CORSI of 46% and net xG/GP of −0.42 over 48 GP — a large, reliable sample. Opponents control the puck and outchance the team when he is on the ice. This is a consistent, statistically significant weakness in the defensive corps. His +/− of −22 corroborates the advanced metrics." },
  { title: "Thin Reliable Depth", body: "Only 9 skaters have 8+ GP. The top three forwards (Smith, King, Mackay) carry a disproportionate share of production. If opponents can neutralize those three or any are unavailable, the team's offensive output drops sharply. Most limited-sample players (TVB, IceDogs, AVAvs) appeared in 1–4 games." },
  { title: "Defensive Core Net-Negative", body: "Both reliable defensemen with meaningful net xG data skew negative: Chris Pan (−0.42/GP) and Brody Betts (−0.04/GP). Austin McDermott is the exception (+0.25/GP, CORSI 56%), but is the only positive-possession reliable defender. The backend is a net drag on the team's on-ice impact." },
  { title: "Henry McDonald — Slight Underperformer", body: "McDonald's cumulative GSAx is −3.83 over 14 GP (−0.27/game). While less alarming than Min's numbers, the trend is consistent underperformance vs. shot quality. In tight games, below-expected goaltending adds up." }
];

const GOLD_GAME_PLAN = [
  { n: 1, title: "Attack Through Chris Pan — Expose the Liability", body: "Pan has a CORSI of 46% and net xG/GP of −0.42 over a 48-game reliable sample. When he is on the ice, his team generates fewer shot attempts and fewer quality chances than the opponent. Identify his shifts and generate sustained zone pressure during his ice time. Target the slot — his side. His +/− of −22 shows this translates directly to goals against." },
  { n: 2, title: "Force Noah Min Into High-Danger Situations", body: "Min's GSAx of −0.85/game over 30 GP is the team's biggest tactical weakness. He consistently allows more goals than the shot quality warrants, especially in high-volume games. Prioritize inner-slot shots, cycling plays that generate sustained zone time. In three separate games he posted GSAx below −4.0. The more chances you generate, the more his tendency to underperform will manifest." },
  { n: 3, title: "Neutralize Gannon Smith — All Three Zones", body: "Smith is the engine of this team: 1.52 Pts/GP, finishing ratio 1.73, 4.00 SOG/GP, CORSI 55%, 64% faceoff rate over 1,007 draws. He must be matched against your strongest shutdown center for faceoffs. Physically contest him in all three zones and limit his inner-slot opportunities. His xG/shot of 0.14 shows he shoots from quality positions, not the perimeter." },
  { n: 4, title: "Win the Faceoff Battle Against Smith", body: "Smith's 1,007 faceoff sample at 64% is elite. Losing faceoffs to him in the defensive zone leads to direct shot attempts and sustained pressure. Send your best faceoff forward against him exclusively, and have your defensemen prepared for immediate puck battles after draws. Randolph Sung (266 draws, 42%) is beatable in faceoffs — target his draws in the offensive zone." },
  { n: 5, title: "Disrupt Santana King's Possession Game", body: "King posts a CORSI of 69% over 58 GP — genuinely elite at the AAA level. He doesn't score at an elite rate (0.28 Pts/GP) but his on-ice presence (net xG/GP +0.45) shows he systematically tilts the shot-attempt balance. Match a physical, defensively responsible forward against him. Deny him clean puck retrievals and cut off his breakout passes." },
  { n: 6, title: "Contain Purvins With Size and Physicality", body: "Purvins posts a CORSI of 61% and net xG of +0.33/GP over 21 GP. His possession numbers are elite for his age group. He has 0.48 A/GP suggesting he creates offense through distribution. Match a larger, defensive-minded wing against him. Deny him time and space in the neutral zone — he excels at clean entries." },
  { n: 7, title: "Exploit Roster Depth Gaps in Extended Games", body: "Only 9 skaters have 8+ GP. The team's core three (Smith, King, Mackay) carry the offensive load. In tournaments or back-to-back situations where Smith's ice time is managed, scoring depth drops off significantly. Use aggressive, high-energy forechecks to tire out their top players early and force their depth into high-pressure situations." }
];

const GOLD_RADAR_DATA = [8, 6, 6, 5, 7, 8, 4, 5];

const GOLD_OVERVIEW_FINDINGS = {
  strengths: [
    "Smith: 1.73× finishing ratio (48 GP)",
    "King: +0.45 net xG/GP — elite on-ice impact",
    "King: 69% CORSI over 58 GP",
    "Smith: 64% FO rate on 1,007 draws"
  ],
  weaknesses: [
    "Noah Min: GSAx −0.85/game over 30 GP",
    "Chris Pan: 46% CORSI, −0.42 net xG/GP over 48 GP",
    "Only 9 skaters with 8+ GP",
    "Defensive core net-negative overall"
  ]
};

const GOLD_POSS_FOOTNOTE = "FO% shown only for players with >5 draws taken. ScCh% not available for Gold players.";

const GOLD_GOALIE_NOTE = "Noah Min (30 GP): GSAx −25.59 (−0.85/game) — systematic underperformance. Four games below −3.0 GSAx, including −5.80 vs. Philadelphia and −5.00 vs. Team Alaska. Henry McDonald (14 GP): GSAx −3.83 (−0.27/game). Calib James: 3 GP only — limited sample. Both primary goalies trend negative vs. shot quality.";


/* ── Active team pointer (set by app.js switchTeam) ── */
// Starts on Red to match existing behaviour
let PLAYERS    = RED_PLAYERS;
let GOALIES    = RED_GOALIES;
let STRENGTHS  = RED_STRENGTHS;
let WEAKNESSES = RED_WEAKNESSES;
let GAME_PLAN  = RED_GAME_PLAN;
let TEAM_NAME  = RED_TEAM_NAME;
let RADAR_DATA = RED_RADAR_DATA;
let OVERVIEW_FINDINGS = RED_OVERVIEW_FINDINGS;
let POSS_FOOTNOTE     = RED_POSS_FOOTNOTE;
let GOALIE_NOTE       = RED_GOALIE_NOTE;
