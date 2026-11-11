# Matthew Rost — Portfolio

Welcome to the source code for my personal portfolio website, built to showcase my background, professional experience, and full-stack software engineering projects.

## 🚀 Tech Stack

- **Framework:** React 19 / Vite
- **UI Library:** Material-UI (MUI v9) & Emotion
- **Smooth Scrolling:** `react-scroll`
- **Deployment:** GitHub Pages via `gh-pages`

---

## 🛠️ Getting Started

Make sure you have [pnpm](https://pnpm.io/) installed globally on your machine.

### 1. Installation
Clone the repository and install dependencies using `pnpm`:

```bash
pnpm install
```

### 2. Running Locally
Start the local development server with Vite:

```bash
pnpm run dev
```

Open your browser at the local development URL provided in your terminal to view the application.

---

## 📦 Build & Deployment

### Build for Production
To bundle and optimize the app for production (`dist` folder):

```bash
pnpm run build
```

### Preview Production Build
To locally preview the built production bundle:

```bash
pnpm run preview
```

### Deploy to GitHub Pages
This project is configured to deploy directly to GitHub Pages. Run:

```bash
pnpm run deploy
```

*(Note: The `predeploy` script automatically runs `pnpm run build` right before pushing to GitHub Pages).*
