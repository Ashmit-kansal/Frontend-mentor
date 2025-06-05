# Frontend Mentor - Time Tracking Dashboard Solution

A responsive time tracking dashboard built with **React**, **Vite**, and **Tailwind CSS**.  
This project is a solution to the [Frontend Mentor Time Tracking Dashboard Challenge](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw).

---

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

---

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the dashboard depending on their device's screen size
- Switch between daily, weekly, and monthly timeframes
- See hover and focus states for all interactive elements
- View time tracking cards with custom icons and background colors

---

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox & CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/) - Build tool

### What I learned

- How to fetch and map JSON data in React
- Using Tailwind CSS for rapid and responsive styling
- Dynamically assigning icons and background colors to cards
- Managing UI state for timeframe switching
- Accessibility considerations for interactive elements

#### Example code

```jsx
useEffect(() => {
  fetch("/data.json")
    .then((res) => res.json())
    .then((json) => {
      const modified = json.map((item, idx) => ({
        ...item,
        icon: icons[idx],
        color: colors[idx],
      }));
      setData(modified);
    });
}, []);