# Tip Calculator App

A responsive tip calculator built with **React** and **Vite** for the [Frontend Mentor](https://www.frontendmentor.io/) challenge.

## Features

- Enter bill amount, select or enter custom tip percentage, and specify number of people
- Real-time calculation of tip and total per person
- Responsive design for mobile and desktop
- Accessible and keyboard-friendly
- Custom styling with Tailwind CSS and custom utility classes

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
  App.jsx           # Main React component
  main.jsx          # Entry point
  index.css         # Tailwind and custom styles
  assets/
    images/         # SVG icons and logo
public/
  vite.svg          # Vite logo
```

## Customization

- **Colors and fonts** are defined in `src/index.css` using Tailwind and CSS variables.
- **SVG icons** are used for dollar and person symbols.
- **Custom text presets** are defined in `@layer components` in `index.css`.

