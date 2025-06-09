# Password Generator App

A responsive password generator built with **React**, **Vite**, and **Tailwind CSS** for the [Frontend Mentor](https://www.frontendmentor.io/) challenge.

## Features

- Generate secure passwords with customizable length
- Options to include uppercase, lowercase, numbers, and symbols
- Always includes at least one character from each selected type
- Password strength indicator
- Copy password to clipboard with feedback
- Responsive and accessible UI
- Custom design using Tailwind CSS and JetBrains Mono font

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

4. **Preview the production build:**
   ```sh
   npm run preview
   ```

## Folder Structure

```
src/
  App.jsx              # Main React component
  main.jsx             # Entry point
  index.css            # Tailwind and custom styles
  assets/
    images/            # SVG icons and logo
public/
  vite.svg             # Vite logo
```

## Customization

- **Colors and fonts** are defined in `src/index.css` using Tailwind and CSS variables.
- **SVG icons** are used for UI elements.
- **Custom text presets** are defined in `@layer components` in `index.css`.
