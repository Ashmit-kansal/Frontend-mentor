# FAQ Accordion

A responsive FAQ accordion component built with **React**, **Tailwind CSS**, and **Vite**.  
Inspired by Frontend Mentor challenges, this project allows users to expand and collapse answers to frequently asked questions in a modern, accessible UI.

---

## Features

- Expand/collapse FAQ items with smooth transitions
- Responsive and accessible design
- Custom SVG icons and illustrations
- Styled with Tailwind CSS and custom design tokens
- Built with React functional components and hooks
- Data-driven: FAQs loaded from a JSON file

---

## Tech Stack

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

---

## Project Structure

```
faq-accordion/
├── public/
│   └── images/                  # SVGs and illustrations
├── src/
│   ├── assets/                  # Additional assets
│   ├── App.jsx                  # Main component
│   ├── FaqItem.jsx              # FAQ item component
│   ├── data.json                # FAQ data
│   ├── index.css                # Tailwind and custom styles
│   └── main.jsx                 # Entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## Customization

- **Colors & Fonts:**  
  Edit `src/index.css` to adjust Tailwind config or custom CSS variables.
- **FAQ Data:**  
  Update `src/data.json` to change the questions and answers.
- **SVGs & Illustrations:**  
  Replace or update SVGs in `src/assets/images/` as needed.

---