# 2026 Jr. Sharks Red — Selects Scouting App

Advanced analytics scouting report for the 2026 Jr. Sharks Red selects team, built as a static web app.

## Live App

Deploy via GitHub Pages (see setup below) or open `index.html` directly in any browser — no server required.

## What's Inside

| Section | Description |
|---|---|
| **Team Summary** | Radar overview + key findings at a glance |
| **Roster** | All 17 skaters with per-game advanced stats |
| **Finishing / xG** | Finishing ratios (goals ÷ xG), shot quality (xG/shot) |
| **Possession** | CORSI%, Fenwick%, faceoff rates |
| **On-Ice Impact** | Net xG/GP — team outchances vs. concedes with each player on |
| **Goalie Analysis** | GSAx (Goals Saved Above Expected) per game, both goalies |
| **Strengths & Weaknesses** | Evidence-based S&W from the advanced metrics |
| **Game Plan** | 7 tactical recommendations ordered by impact priority |

## Key Methodology Notes

- All counting stats normalized **per game played** — player datasets are unequal in size and come from different teams
- Players with **fewer than 10 GP** are flagged with ⚠ throughout — treat directionally only
- **Reliable readings** (10+ GP) are weighted more heavily in all analysis
- **GSAx** = xGA − actual GA. Positive means the goalie saved more than shot quality predicted
- **Net xG/GP** = team xG − opponent xG while the player is on ice, per game
- **Finishing ratio** = actual goals ÷ xG. Above 1.0 = outperforming expected goals

## File Structure

```
2026_Selects/
├── index.html          # App shell and page templates
├── css/
│   └── style.css       # All styling (light + dark mode)
├── js/
│   ├── data.js         # All player, goalie, S&W, and game plan data
│   └── app.js          # Chart building and UI logic
└── README.md
```

To update player data or add new games, edit **`js/data.js`** only — the rest of the app reads from it automatically.

## GitHub Pages Setup

1. Push this repo to GitHub as `2026_Selects`
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch → main → / (root)**
4. Your app will be live at `https://<your-username>.github.io/2026_Selects/`

## Local Development

No build step needed. Just open `index.html` in a browser:

```bash
# Option 1 — direct open
open index.html

# Option 2 — local server (avoids any file:// quirks)
npx serve .
# or
python3 -m http.server 8080
```
