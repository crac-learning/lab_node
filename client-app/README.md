# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

### ⚙️ Installation

To install and set up locally, follow these steps:

1. Clone the repository from GitHub: git clone **https://github.com/crac-learning/lab_node**.
2. Install the required dependencies by running **yarn install** in the project directory.
3. Start the development server: yarn dev.
4. Access this project in your web browser at **http://localhost:5173/**.

### 📂 Folder Structure

```
src
├── App.tsx
├── main.tsx
├── Assets
│ ├── fonts
| ├── icons
│ ├── images
│ └── ...
├── Components
│ ├── Alert
│ ├── ...
│ └── ...
├── Config
│ ├── api
│ └── constants
├── Constants
│ └── ...
├── Layout
│ ├── Footer
│ ├── Header
│ │ ├── Redux
│ │ │ ├── Queries.ts
│ │ │ ├── index.ts
│ │ │ └── Types.ts
│ │ └── ...
│ └── ...
├── Pages
│ ├── Auth
│ │ ├── Login
│ │ ├── Signup
│ │ └── Redux
│ │ ├── Queries.ts
│ │ ├── index.ts
│ │ └── Types.ts
│ ├── Home
│ ├── Shop
│ │ ├── Accessories
│ │ ├── Footwear
│ │ └── Redux
│ │ ├── Queries.ts
│ │ ├── index.ts
│ │ └── Types.ts
│ └── ...
├── Routes
│ ├── constants.ts
│ └── index.tsx
├── Store
│ ├── hooks.ts
│ ├── index.ts
│ └── reducer
├── Style
│ └── main.css
└── Utils
└── ...

```

### ⚙️ Application Structure

## Store Front

<!--
```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
``` -->

```

```
