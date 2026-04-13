# Type A House of Electronics — Homepage

A modern, premium React + Framer Motion homepage for Type A House of Electronics.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# 1. Navigate to the project folder
cd type-a-electronics

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder. You can deploy this to:
- **Netlify** — drag and drop the `dist` folder
- **Vercel** — `vercel --prod`
- **GitHub Pages** — push `dist` to a `gh-pages` branch

---

## 🗂️ Project Structure

```
src/
├── styles/
│   └── global.css          # Design tokens & global styles
├── components/
│   ├── Navbar.jsx/.module.css
│   ├── Hero.jsx/.module.css
│   ├── Products.jsx/.module.css
│   ├── WhyUs.jsx/.module.css
│   ├── About.jsx/.module.css
│   ├── Contact.jsx/.module.css
│   ├── Footer.jsx/.module.css
│   └── WhatsAppFab.jsx/.module.css
├── App.jsx
└── main.jsx
```

---

## ✏️ Customization

### Update WhatsApp number
Search for `23200000000` and replace with your actual number (international format, no `+`).

### Update phone / email / address
Edit `src/components/Contact.jsx` — find the `infoItems` section.

### Brand colors
Edit the CSS variables in `src/styles/global.css` under `:root`.

---

## 🛠️ Tech Stack

- **React 18** + **Vite**
- **Framer Motion** — animations & scroll effects
- **Lucide React** — icons
- **CSS Modules** — scoped, component-level styles
- **Google Fonts** — Sora (display) + DM Sans (body)
