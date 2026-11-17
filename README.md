# Ignara — Sales Dashboard

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/ignara-sales-dashboard/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive, interactive frontend recreation of the sales dashboard shown in the uploaded 5.47-second screen recording.

## Run locally
1. Extract `ignara-sales-dashboard.zip`.
2. Open `index.html` in a modern browser.
3. No npm install, build step, API key or server is required.

## Screens and interactions
- **Overview:** sales KPI cards, takings chart and wallet summary.
- **Sales → Takings:** revenue against target, date-range controls and channel filters.
- **Sales → Channels:** channel revenue cards, distribution bar and trend visual.
- **Sales → Best sellers:** product performance table.
- **Orders:** four-stage dispatch board (New, Packing, On the way, Delivered).
- **Products / Customers:** simple catalogue and customer views.
- **New order:** create a local demo order; press `N` as a shortcut.
- **Export CSV:** downloads the demo order list.
- **Search:** search order IDs, customer names and channels; `⌘K` / `Ctrl+K` focuses search.
- **Theme:** top-right sun button toggles light/dark theme.

## Source-derived details
The video title reads **Sales dashboard**. The dashboard branding appears as **Ignara / Hearthwell networks**, with Noor Castellanos, Head of sales. The left navigation visibly includes Overview, Sales, Orders, Products, Customers, Wallet, Bonus, Events, Settings and Help. The Sales view has Takings, Channels and Best sellers tabs. The Orders view shows a dispatch board with New, Packing, On the way and Delivered columns.

The code panel is labelled `src/motion.ts`. Readable lines have been transcribed on a best-effort basis into `src/motion.ts`. It describes a GSAP clip-path animation: determine vertical/horizontal movement, choose leading/trailing edges, animate the leading edge for 0.36 seconds and trailing edge for 0.55 seconds, then animate the cross edges for 0.45 seconds. The video does not show the full original dashboard source code.

## Important implementation note
The displayed sales figures, customers, orders and product data are sample/demo values based on the visual reference. This project is a frontend-only recreation: it has no real payment, inventory, authentication, customer database or backend integration. Creating an order changes the in-browser demo state only.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
