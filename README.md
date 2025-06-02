# 🗺️ Haven Travel Dashboard

A modern UI project built with **React**, **Tailwind**, and **Appwrite** — this is a frontend showcase of authenticated layouts, trip data cards, and route protection flow.

> Note: Auth is implemented locally with Appwrite and **does not persist or function on the deployed site**. This is a UI logic demo, not a full-stack service.

---

## ⚙️ Tech Stack

- ⚡️ Vite – Lightning-fast dev/build
- 🧩 React Router v6.4+ – Loaders, nested layouts, route protection
- 🌀 Tailwind CSS – Utility-first styling
- 💼 Syncfusion – UI components (charts, buttons)
- 🔐 Appwrite – Used for OAuth and session logic (local only)

---

## ✨ Features

- ✅ Clean responsive dashboard UI
- ✅ Sidebar navigation with protected routes
- ✅ AI trip generation flow + static trip cards
- ✅ Trip detail view with itinerary + weather
- ✅ Componentized layout for scaling
- ✅ Local-only Google login (Appwrite)
- ✅ Small external API fetch for U.S. states (used in trip creation form)

---

## 🚫 What It’s Not

This isn’t a full-stack travel app.

There is **no live user DB**, no real-time storage, and no AI backend.  
Only **one external API** is used — to fetch a list of countries in the trip form.

This project is **about UI structure and interface logic**, not backend engineering.

---

## 🛠️ Getting Started

```bash
npm install
npm run dev

To deploy:

npm run build


“I’m not just learning to code.
I’m creating a new life — one with time, freedom, and tools that outlast me.”
— BuiltByWill