# CLAUDE.md — JJ Goodwin's website

Notes for Claude Code. Human-facing docs are in README.md; this file records
context and lessons that aren't obvious from the code.

## The site
- Restaurant/sports pub site for JJ Goodwin's, Center Barnstead NH, maintained
  by the repo owner for a friend (the bar owner). Live at
  https://www.jjgoodwinsrestaurant.com (custom domain, `public/CNAME`).
- Create React App (react-scripts 5) + Tailwind + react-router v6 (BrowserRouter).
- Content is mostly images in `public/assets/` (menu pages, hours). Updates are
  usually "swap these JPEGs", not code changes.

## Publishing (since 2026-11-18)
- `.github/workflows/deploy.yml` builds and deploys on every push to `master`
  (or manually: Actions → Deploy site → Run workflow). Pages source is set to
  "GitHub Actions" in repo settings. The old `gh-pages` branch and
  `npm run deploy` script were deleted — don't reintroduce them.
- Workflow uses Node from `.nvmrc` (26). The lockfile is written by npm 11;
  npm 10 (Node 22) rejects it in `npm ci`. If you change Node versions, change
  `.nvmrc` and regenerate `package-lock.json` together.
- CI builds with `CI=true`, so any ESLint warning fails the build. Before
  pushing, run `$env:CI="true"; npm run build` locally.
- Verify a deploy via the public API (no auth needed):
  `curl -s https://api.github.com/repos/brooks1114/jj-goodwins-site/actions/runs?per_page=1`
  Job logs need auth (no `gh` CLI installed), so reproduce failures locally.

## Workflow the owner likes
- Work on a branch, preview with `npm start` (http://localhost:3000), owner
  reviews, then commit → fast-forward merge into `master` → push. Ask before
  committing/deploying.
- Owner is not a full-time developer: explain in plain language, point out
  problems found along the way, recommend rather than list options.

## Current content state (2026-11-18)
- Menu page shows `menu-1.jpg`…`menu-4.jpg` (1: winter hours/weekly
  specials/happy hour, 2: apps/soups/salads, 3: burgers/entrées/sides/kids,
  4: pizza/desserts). List is at the top of `src/pages/Menu.js`.
- `winter-hours.jpg` is used on Home, Menu, About, Contact. Its alt text spells
  out the hours — update the alt text in all four pages if hours change.
- Hidden (kept in `src/pages/`, routes redirect): Daily Specials and Happy Hour
  → `/menu`, Gallery → `/`. Restore steps are in the comment at the top of
  `src/App.js`. Gallery still references old images (`hours.jpg`,
  `weekly-specials.jpg`, `happy-hour.jpg`) — update before un-hiding.
- Happy hour is Tue–Fri; closed Mondays. Keep page text consistent with the
  menu images (About page mentions happy hour days).
- `public/assets/pizza-menu.jpeg` and several other old images are unused.

## Gotchas
- Deep links on GitHub Pages: `public/404.html` forwards `/menu` → `/?/menu`,
  and a script in `public/index.html` restores the path (spa-github-pages).
  Inner pages return HTTP 404 before the redirect — expected, not a bug, but
  bad for SEO.
- `public/sitemap.xml` lists only visible pages; update it when pages are
  shown/hidden.
- Images the owner drops in sometimes land in the wrong folder or are
  duplicates — check location and compare checksums before using them.
- Stop the `npm start` dev server before `npm ci` on Windows (it locks
  `node_modules/.cache` → ENOTEMPTY).
- Node is at `C:\Program Files\nodejs`; Git Bash may not have it on PATH until
  VS Code restarts — prepend it in PowerShell if `node` isn't found.
- Git identity is set repo-locally on this PC (matches earlier commits).

## Deferred (owner chose to hold off)
- Migrate off Create React App (unmaintained) to Vite; consider prerendering
  inner pages to fix the 404 status / SEO issue at the same time.
