# JJ Goodwin's Restaurant & Sports Pub website

Live at **https://www.jjgoodwinsrestaurant.com**, hosted on GitHub Pages.

Built with React (Create React App) and Tailwind CSS.

## Where things live

| What | Where |
|---|---|
| Pages (Home, Menu, About, Contact, Job Application, …) | `src/pages/` |
| Navigation bar links | `src/components/Navbar.js` |
| Page addresses (routes) | `src/App.js` |
| Images and PDFs (menu pages, hours, logo, …) | `public/assets/` |
| Custom domain, sitemap, robots, 404 redirect | `public/` |

### Common updates

- **New menu:** replace `public/assets/menu-1.jpg` … `menu-4.jpg` (same names).
  To change the number of pages, edit the list at the top of `src/pages/Menu.js`.
- **New hours:** replace `public/assets/winter-hours.jpg`. It is shown on the
  Home, Menu, About and Contact pages.

### Hidden pages

Daily Specials, Happy Hour and Gallery are hidden for now (their content was out
of date). The page files are still in `src/pages/`, and their old addresses
redirect to the Menu or Home page. To bring one back, follow the note at the top
of `src/App.js` and uncomment its link in `src/components/Navbar.js`.

## Working on the site

Requires [Node.js](https://nodejs.org) version 26 (LTS), the same version the
publishing workflow uses (set in `.nvmrc`).

```
npm ci        # install the exact dependency versions in package-lock.json
npm start     # preview at http://localhost:3000 (updates as you edit)
npm run build # production build into build/ (optional local check)
```

Make changes on a branch, preview them, then merge into `master`.

## Publishing

Publishing is automatic. Every push to `master` runs the **Deploy site**
workflow (`.github/workflows/deploy.yml`), which builds the site and publishes
it to GitHub Pages. It takes a couple of minutes; progress is on the repo's
**Actions** tab.

To re-publish without a code change: **Actions → Deploy site → Run workflow**.

### Why inner-page links work

GitHub Pages only knows about real files, so a visit straight to `/menu` gets
`public/404.html`. That page forwards to `/?/menu`, and a small script in
`public/index.html` turns it back into `/menu` for the app.
Based on [spa-github-pages](https://github.com/rafgraph/spa-github-pages).
