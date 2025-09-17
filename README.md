# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
Gaming Store
A full-stack e-commerce web app for a gaming store, built with React, TypeScript, Vite, Firebase, Redux Toolkit, and Tailwind CSS.

Features
User registration, login, and authentication (Firebase Auth)
Product listing, product details, and add-to-cart functionality
Shopping cart with persistent state (Redux + redux-persist)
Checkout and order placement (Firestore)
View order history (My Orders)
Admin panel for user and product management
Responsive UI with Tailwind CSS
Modular code structure with reusable components
Tech Stack
Frontend: React 19, TypeScript, Vite, Tailwind CSS, React Router v7
State Management: Redux Toolkit, redux-persist
Backend/Database: Firebase Auth & Firestore
Other: React Icons
Getting Started
Prerequisites
Node.js (v18+ recommended)
Firebase project (see below)
Installation
Clone the repository:

Install dependencies:

Set up Firebase:

Create a Firebase project at Firebase Console.
Enable Authentication (Email/Password) and Firestore Database.
Copy your Firebase config and update src/firebase/firebaseConfig.ts.
Start the development server:

Open your browser:
Visit http://localhost:5173 (or the port shown in your terminal).

Project Structure
src/pages/ — Main app pages (Home, Products, Admin, Orders, etc.)
src/components/ — Reusable UI components (Cart, ProductList, RegistrationForm, etc.)
src/firebase/ — Firebase config, authentication, and Firestore service logic
src/store/ — Redux Toolkit slices and store setup
types.ts — TypeScript interfaces for app data
Scripts
npm run dev — Start development server
npm run build — Build for production
npm run lint — Lint code with ESLint
Customization
Admin features: Only users with the role: 'admin' field in Firestore can access admin routes.
Styling: Tailwind CSS is used throughout. Customize in tailwind.config.js and component classes.
Routing: See App.tsx for all available routes.
Troubleshooting
Redux Persist Warnings:
You may see a warning about non-serializable values in redux-persist actions. This is expected and does not affect functionality.

Firestore Indexes:
If you see a Firestore error about missing indexes, follow the link in the error message to create the required index in the Firebase Console.