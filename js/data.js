const TEAM_NAME = "2012 Red Selects";

const PLAYERS = [
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

const GOALIES = [
  {
    id: "G1",
    games: [
      { opp: "vs Windy City Storm 13U AAA", score: "W 3-1", ga: 1, xga: 0.91, sv_pct: 95, saves: 21, shots: 22, gsax: -0.09 },
      { opp: "@ NJ Rockets 13U AAA",        score: "L 3-7", ga: 7, xga: 2.20, sv_pct: 84, saves: 37, shots: 44, gsax: -4.80 },
      { opp: "@ Minuteman Flames (partial)", score: "L 3-5", ga: 1, xga: 0.43, sv_pct: 67, saves: 2,  shots: 3,  gsax: -0.57 },
      { opp: "vs Minuteman Flames 13U",      score: "W 3-1", ga: 1, xga: 4.80, sv_pct: 97, saves: 37, shots: 38, gsax: 3.80  }
    ]
  },
  {
    id: "G2",
    games: [
      { opp: "@ Golden State Eagles U14 AA",  score: "W 6-3", ga: 3, xga: 2.20, sv_pct: 90, saves: 27, shots: 30, gsax: -0.80 },
      { opp: "@ Jr. Ducks 12U AA-2 (game 1)", score: "W 4-3", ga: 3, xga: 3.70, sv_pct: 90, saves: 26, shots: 29, gsax: 0.70  },
      { opp: "@ Jr. Ducks 12U AA-2 (game 2)", score: "L 3-5", ga: 4, xga: 1.42, sv_pct: 83, saves: 20, shots: 24, gsax: -2.58 },
      { opp: "@ Jr. Ducks 11U AA",            score: "W 4-3", ga: 3, xga: 1.43, sv_pct: 88, saves: 23, shots: 26, gsax: -1.57 },
      { opp: "vs Victory Honda 12U AAA",       score: "L 2-3", ga: 3, xga: 1.34, sv_pct: 86, saves: 18, shots: 21, gsax: -1.66 }
    ]
  }
];

// Derived goalie totals
GOALIES.forEach(g => {
  g.total_saves  = g.games.reduce((s,x) => s + x.saves, 0);
  g.total_shots  = g.games.reduce((s,x) => s + x.shots, 0);
  g.total_ga     = g.games.reduce((s,x) => s + x.ga,    0);
  g.total_xga    = +g.games.reduce((s,x) => s + x.xga,  0).toFixed(2);
  g.total_gsax   = +g.games.reduce((s,x) => s + x.gsax, 0).toFixed(2);
  g.sv_pct       = +((g.total_saves / g.total_shots) * 100).toFixed(1);
  g.gsax_pg      = +(g.total_gsax / g.games.length).toFixed(2);
});

const STRENGTHS = [
  { title: "Van Mierlo: elite finisher", body: "2.24× finishing ratio over 21 GP. He converts more than double the goals his shot quality predicts — over this many games, that's skill, not variance." },
  { title: "Top-line shot quality is elite", body: "Poupyrev (2.90 xG/shot, 48 GP), Moreau (1.82), Leibowitz (1.64). The entire top group consistently attacks the inner slot from high-danger positions." },
  { title: "Leibowitz drives on-ice xG", body: "+0.50 net xG/GP over 16 GP and 58% CORSI. When he's on the ice the team materially outchances opponents. He is the most impactful player by advanced metrics." },
  { title: "Center faceoff depth", body: "Van Mierlo (324 draws, 51%) and Leibowitz (291 draws, 51%) take nearly all important draws. The team doesn't lose possession after stoppages at the top end." },
  { title: "Krieger: only positive-possession D", body: "52% CORSI and 0.95 blocks/GP over 21 GP. The only D with a meaningful sample above 50% CORSI — he's both controlling play and providing a physical presence." },
  { title: "Goalie 1 has a proven ceiling", body: "97% SV% against 4.80 xGA in one game is real evidence he can steal a game when the team needs it most." }
];

const WEAKNESSES = [
  { title: "D corps are possession liabilities", body: "Ivmark (44% CORSI, −0.53 net xG/GP over 47 GP) and Su (44%, −0.09 over 19 GP) are the two most data-reliable D readings. Both are below 50%. The defensive zone is under sustained pressure when they're on." },
  { title: "Poupyrev is net-negative on-ice", body: "Despite 48 GP and 2.90 xG/shot, his net xG/GP is −0.23. He finds elite shooting positions individually but the team gives up more xG than it creates while he's on the ice." },
  { title: "Moreau's +/- contradicts net xG", body: "Net xG/GP is +0.13 (team outchances opponents) but +/-/GP is −0.39. Consistently on the ice for goals against despite positive possession metrics — a warning sign." },
  { title: "Goalie 2 is GSAx −5.91 over 5 games", body: "Only one game above expected goals allowed. She is systematically allowing more than the defense earns and is an active liability most nights." },
  { title: "Goalie 1 is also net-negative overall", body: "GSAx −1.66 total is rescued by one outlier game (+3.80). Across the other three games he is −5.46 combined. Strip the outlier and both goalies are the same problem." },
  { title: "Low scoring chance conversion", body: "Mierlo 21%, Leibowitz 15%, Poupyrev 12%, Moreau 16%. They create volume but leave a lot on the table. A sharp goalie will contain this team." }
];

const GAME_PLAN = [
  { n: 1, title: "Pressure Ivmark and Su on breakouts", body: "Both are 44% CORSI on reliable, large samples — the most trustworthy D readings in the dataset. They lose puck battles in their own zone. A sustained forecheck targeting their exits generates turnovers and keeps shifts in the offensive zone." },
  { n: 2, title: "Shadow Leibowitz — he is the most dangerous player by net xG/GP", body: "+0.50 net xG/GP and 58% CORSI over 16 GP makes him the single most impactful player on this team. Assign your best two-way forward to him. If he's neutralized, this team loses its best possession driver and a scoring center simultaneously." },
  { n: 3, title: "Don't let Van Mierlo settle — he converts at 2.24× xG", body: "His shot quality (1.39 xG/shot) is real but not elite — what makes him dangerous is his elite finishing. Deny him clean looks and force contested attempts from bad angles. His finishing ratio drops if he's shooting off-balance or from the perimeter." },
  { n: 4, title: "Contest Poupyrev physically — net-negative despite elite shot quality", body: "2.90 xG/shot means every slot access is dangerous. But his −0.23 net xG/GP over 48 GP means he's already a break-even player on-ice — physical play pushes him into the negative and limits clean looks." },
  { n: 5, title: "Attack Goalie 2 early — consistently below expected performance", body: "GSAx −5.91 over 5 games, only one above-expectation start. Early hard slot shots before she's set, screens, and rebound battles in the inner slot replicate conditions where she has underperformed by the widest margin." },
  { n: 6, title: "Exploit scoring chance conversion gaps", body: "Poupyrev 12%, Leibowitz 15%, Moreau 16%, Mierlo 21% scoring chance conversion. A hot goalie neutralizes this team. Position and rebound control matter more than shutting out attempts entirely." },
  { n: 7, title: "Target faceoffs against Poupyrev and Moreau", body: "Mierlo and Leibowitz at 51% on hundreds of draws are tough. But Poupyrev takes only 11 draws in 48 GP (45% win rate) and Moreau only 6 in 28 GP. Line-match your center against anyone other than these two centers for an immediate possession edge." }
];
