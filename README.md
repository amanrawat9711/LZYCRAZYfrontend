# React + Vite Authentication Dashboard

This project is a simple authentication system built with **React** and **Vite**, featuring localStorage-based login and signup, route protection, and dashboard redirection.

## 🚀 Features

- 🔐 Login and Signup with form validation
- 💾 User data and session stored in `localStorage`
- 🛡️ Protected route (`/dashboard`)
- 🔁 Toggle between login and signup
- 🎨 Tailwind CSS for clean and responsive UI
- ⚡ Built with Vite for fast development

## 🧱 Tech Stack

- React (Hooks)
- Vite
- React Router DOM
- Tailwind CSS
- localStorage (for demo persistence)

## 📁 Folder Structure

```plaintext
.
├── public/
│   ├── index.html           # Entry point for the application
├── src/
│   ├── assets/              # Images, icons, and other assets
│   ├── components/          # Reusable components like buttons, forms, etc.
│   ├── pages/               # Pages like login, dashboard, etc.
│   ├── App.jsx              # Main component that defines the routes and layout
│   ├── main.jsx             # Entry point for React
│   ├── utils/               # Utility functions like API calls, authentication helpers
├── tailwind.config.js       # Tailwind CSS configuration file
├── vite.config.js           # Vite configuration file
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation (this file)
