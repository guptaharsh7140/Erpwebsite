# NexaERP Website

A modern one-page ERP company website built with **React.js** and **Tailwind CSS**.

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
nexaerp/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Features.jsx
│   │   ├── Industries.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── package.json
└── README.md
```

## 🎨 Sections Included

1. **Navbar** – Sticky header with smooth scroll navigation & mobile hamburger menu
2. **Hero** – Animated hero with live dashboard mockup
3. **About** – Company intro, mission, vision, and stats
4. **Services** – 6 service cards (Inventory, HR, Accounting, CRM, Payroll, Analytics)
5. **Features** – 4 feature highlights (Cloud, Analytics, Security, Customization)
6. **Industries** – Manufacturing, Retail, Healthcare, Education
7. **Testimonials** – 3 client reviews with star ratings
8. **Contact** – Validated contact form + address/phone/email
9. **Footer** – Social links, sitemap columns, copyright

## 🛠 Tech Stack

- React 18 (functional components + hooks)
- Tailwind CSS (utility-first styling)
- Google Fonts (Sora + DM Sans)
- Pure CSS animations
