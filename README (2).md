# Zenith Store — AngularJS E‑Commerce Demo

A clean, single-page e-commerce storefront built with **AngularJS (1.x)**, Tailwind CSS, and Font Awesome. It features a product catalog with search and category filtering, and a fully working shopping cart — all client-side, with no build step required.

> **Note — AngularJS, not modern Angular.** This project is written with **AngularJS 1.x** (the legacy framework, `angular.js 1.8.3`), *not* the modern Angular framework (2+). It is intentionally kept as a classic, dependency-light example of SPA development.

## Overview

Zenith Store is a small portfolio/work-sample project demonstrating how to structure a classic AngularJS single-page application across multiple files (module, data, and controllers) while keeping it a pure static site — perfect for GitHub Pages. The original app was a single HTML file; this repository refactors it into a clean, GitHub-ready layout without changing its behavior.

## Features

- 🛍️ **Product catalog** — 12 demo products across Electronics, Home, Fashion, and Sports
- 🔍 **Live search** — instantly filter products by name or description
- 🗂️ **Category filtering** — one-click category chips
- 🛒 **Shopping cart** — add, increment/decrement quantity, remove, live count badge and running total
- ⭐ **Ratings & stock states** — star ratings, review counts, and "sold out" product handling
- ⚡ **Zero build step** — all libraries load via CDN; open `index.html` and go
- 🎨 **Tailwind CSS + Font Awesome** styling with responsive layout and a slide-in cart drawer

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Framework  | AngularJS 1.8.3 (legacy AngularJS)  |
| Styling    | Tailwind CSS (Play CDN)             |
| Icons      | Font Awesome 6                      |
| Runtime    | Plain static hosting (no build)     |

## Project Structure

```
zenith-angularjs-store/
├── index.html          # Single-page view (uses Tailwind, FontAwesome, AngularJS via CDN)
├── js/
│   ├── app.js          # Angular module definition + custom filter
│   ├── products.data.js# Product catalog registered as an injectable Angular constant
│   └── controllers.js  # MainController (catalog, search, cart logic)
├── README.md
├── LICENSE             # MIT
└── .gitignore
```

Scripts are loaded in dependency order in `index.html`:

1. `js/app.js` — defines the `zenithStore` module (`angular.module('zenithStore', [])`) and custom filters
2. `js/products.data.js` — registers the `productCatalog` constant onto the module
3. `js/controllers.js` — registers `MainController` and injects `productCatalog`

## Run Locally

No build tools needed — it is a fully static site.

**Option A — just open it**

Double-click `index.html` (or drag it into a browser). Because everything is client-side and CDN-based, it works straight from disk.

**Option B — a tiny local server (recommended)**

```bash
# Python 3
python -m http.server 8080

# or Node
npx serve .
```

Then open <http://localhost:8080>.

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `zenith-angularjs-store`) and push this project:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Zenith Store AngularJS demo"
   git branch -M main
   git remote add origin https://github.com/<your-username>/zenith-angularjs-store.git
   git push -u origin main
   ```

2. In the repository, go to **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then **Save**.
5. Wait a minute or two; your site will be live at:

   `https://<your-username>.github.io/zenith-angularjs-store/`

## What this demonstrates

- **Separation of concerns in AngularJS 1.x** — module, injectable data (`constant`), and controllers each live in their own file instead of one monolithic HTML page.
- **Dependency injection** — the controller receives `productCatalog` and `$filter` through Angular's DI system rather than relying on globals.
- **Declarative UI patterns** — `ng-repeat`, `ng-if`, `ng-class`, and filters (`filter`, `currency`) driving the catalog and cart rendering.
- **State management without a framework's store** — simple, readable scope state for cart items, quantities, and UI toggles.
- **Polish details for production-feel demos** — `ng-cloak` to prevent template flash, a CSS `line-clamp` fallback for consistent card text, correct script load order, and accessible disabled states for out-of-stock items.

## License

Released under the [MIT License](LICENSE). Product data is fictional demo content.
