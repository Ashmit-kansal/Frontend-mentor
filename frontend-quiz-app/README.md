# Frontend Quiz App

A quiz application built with **React**, **Redux Toolkit**, **Tailwind CSS**, and **Vite**.  
This project is inspired by a Frontend Mentor challenge and allows users to test their knowledge in HTML, CSS, JavaScript, and Accessibility.

---

## Features

- Select a subject (HTML, CSS, JavaScript, Accessibility)
- Multiple-choice questions with instant feedback
- Progress bar and score tracking
- Light and dark theme support
- Responsive design

---

## Tech Stack

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
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
frontend-quiz-app/
├── public/
│   └── data.json            # Quiz data
├── src/
│   ├── assets/              # Images and SVGs
│   ├── components/          # React components
│   ├── redux/               # Redux slice and store
│   ├── index.css            # Tailwind and custom styles
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Entry point
├── package.json
└── vite.config.js
```

---

## Customization

- **Add or edit questions:**  
  Update `public/data.json` to add more quizzes or questions.

- **Change theme colors:**  
  Edit `src/index.css` for custom Tailwind color variables.

---
