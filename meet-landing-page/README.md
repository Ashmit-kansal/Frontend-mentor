# Frontend Mentor - Meet Landing Page Solution

A responsive landing page built with **React**, **Vite**, and **Tailwind CSS**.  
This project is a solution to the [Frontend Mentor Meet Landing Page Challenge](https://www.frontendmentor.io/challenges/meet-landing-page-rbT0bM8vb).

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

- View the optimal layout for the site depending on their device's screen size
- See hover and focus states for all interactive elements

---

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/) - Build tool

### What I learned

- How to structure a responsive landing page using Tailwind CSS and React.
- Using custom color and font size utilities in Tailwind config.
- Combining CSS Grid and Flexbox for complex layouts.
- Creating reusable components with semantic HTML and flexible styling via props.
- Responsive design techniques for different screen sizes.
- Managing assets and images in a Vite + React project.
- How to use custom fonts and style headings and body text distinctly.

#### Example code

```jsx
<header className="overflow-hidden text-center relative font-redhat font-black text-[40px]/[1.1] tracking-normal lg:flex lg:gap-8">
  <img
    src={heroImage}
    alt="Hero"
    className="w-[116vw] mx-auto max-w-none translate-x-[-8vw] mb-12 lg:hidden"
  />
  <img src={heroImageLeft} alt="Hero Left" className="hidden lg:block" />
  <div>
    <h1 className="text-slate-900">Group Chat for Everyone</h1>
    <p className="text-slate-600 text-lg font-medium p-7">
      Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.
    </p>
    <div className="flex flex-col md:flex-row md:justify-center gap-4 items-center">
      <button className="bg-cyan-600 text-white rounded-4xl text-lg py-4 px-8 w-fit hover:bg-cyan-500 transition duration-300 hover:opacity-80">
        Download <span className="text-cyan-300">v1.3</span>
      </button>
      <button className="bg-purple-600 text-white rounded-4xl text-lg py-4 px-8 w-fit hover:bg-purple-500 transition duration-300 hover:opacity-80">
        What is it?
      </button>
    </div>
  </div>
  <img
    src={heroImageRight}
    alt="Hero Right"
    className="hidden lg:block"
  />
</header>