# Frontend Mentor - Newsletter Sign-up Form Solution

A responsive newsletter sign-up form built with **React**, **Vite**, and **Tailwind CSS**.  
This project is a solution to the [Frontend Mentor Newsletter Sign-up Form Challenge](https://www.frontendmentor.io/challenges/newsletter-sign-up-form-with-success-message-5RTg5JgZg).

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

- View the optimal layout for the form depending on their device's screen size
- See hover and focus states for all interactive elements
- Receive form validation and error messages for invalid email addresses
- See a success message after submitting a valid email


---

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/) - Build tool

### What I learned

- How to handle form validation and error states in React
- Using Tailwind CSS for rapid and responsive styling
- Creating custom list icons and success messages
- Managing conditional rendering for different UI states

#### Example code

```jsx
<form onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Enter your email address"
    value={email}
    onChange={e => setEmail(e.target.value)}
    autoComplete="off"
    className={`block w-full p-3 border rounded-lg my-2 ${error ? "outline-red text-red bg-red-100" : "outline-grey"}`}
  />
  <button
    className={`text-preset2-bold text-white w-full p-4 rounded-lg my-4 
      ${email
        ? "bg-gradient-to-r from-gradient-left to-gradient-right"
        : "bg-blue-800"
      }`}
    type="submit"
  >
    Subscribe to monthly newsletter
  </button>
</form>