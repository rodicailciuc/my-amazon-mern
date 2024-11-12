# MERN frontend template

This repository provides a Vite-based frontend template, designed for fast development and an efficient build process. It includes organized directories, core configuration files, and essential project setup instructions to help you start building immediately.

## Project Structure

```plaintext
Project/
|-- public/                 # Static assets
|-- src/
|   ├── components/         # Reusable UI components
|   ├── utils/              # Utility functions
|   ├── App.jsx             # Root component
|   ├── App.css             # Root component styling
|   ├── main.js             # Application entry point
|   ├── main.css            # Global CSS
|-- .env                    # Environment variables (development)
|-- .env.production         # Environment variables (production)
|-- .gitignore              # Files and directories to ignore in Git
|-- .prettierrc.json        # Prettier configuration
|-- eslint.config.js        # ESLint configuration
|-- index.html              # Main HTML file
|-- README.md               # Project documentation (this file)
|-- vite.config.js          # Vite configuration
```

## Directory and File Overview

### **public/**

Contains static assets that won’t be processed by Vite. Anything here is served directly at `/`. Use this folder for assets like images or fonts you want available directly in production.

### **src/**

The main source directory for the project. Key contents include:

- **components/**: Houses reusable UI components, each in its own file.
- **utils/**: Contains utility functions, promoting code reusability across components.
- **App.jsx**: The root component of the application, serving as the primary layout and logic container.
- **App.css**: Styles specifically for the `App.jsx` component.
- **main.js**: The entry point that initializes the app, mounting `App.jsx` to the root DOM node.
- **main.css**: Global styles applied across the application.

### Project Root Files

- **.env**: Environment variables for development (e.g., `VITE_API_URL=http://localhost:3000`).
- **.env.production**: Environment variables for production (e.g., `VITE_API_URL=https://api.yoursite.com`).
- **.gitignore**: Specifies files and directories for Git to ignore.
- **.prettierrc.json**: Configuration file for Prettier, enforcing consistent code formatting.
- **eslint.config.js**: Configuration file for ESLint, setting coding standards and identifying potential issues.
- **index.html**: The main HTML file, which Vite uses as the entry template.
- **vite.config.js**: Vite configuration file, allowing customization of the build and dev server.

## Getting Started

To set up and run this Vite project locally, follow these steps:

1. **Install Dependencies**

   ```bash

   npm install
   ```

2. **Start Development Server**

   ```bash
   npm run dev
   ```

   This command starts the Vite development server, enabling live reloading for fast iteration.

3. **Build for Production**

   ```bash
   npm run build
   ```

   This command compiles the project for production, optimizing files for speed and efficiency.

4. **Preview Production Build**

   ```bash
   npm run preview
   ```

   Starts a local server to preview the optimized build.

## Development and Build Scripts

- **`npm run dev`**: Starts the Vite development server on a default port (usually `http://localhost:5173`).
- **`npm run build`**: Builds the app for production, outputting optimized files to the `dist/` directory.
- **`npm run preview`**: Serves the production build locally for testing.

## Environment Variables

Environment variables can be used to configure the application for different environments. Place environment-specific variables in the following files:

- **.env**: For development.
- **.env.production**: For production.

To access environment variables in the code, prefix them with `VITE_`. For example:

```js
// Example usage in a component
const apiUrl = import.meta.env.VITE_API_URL;
```

## Additional Notes

### ESLint and Prettier

This project includes ESLint and Prettier for consistent code formatting and linting. Configuration files for both tools are in the project root. To apply formatting and linting, you can run:

```bash
npm run lint    # For ESLint checks
npm run format  # For Prettier formatting
```

### Vite Configuration

Custom configurations for the Vite build process and development server are set in `vite.config.js`. This file allows adjustments like aliasing paths, customizing build outputs, and setting up proxy servers for API calls during development.

### Static Assets in Public

Files in the `public/` directory are served at the root path. This is useful for storing assets like icons or manifest files that don’t need to be processed by Vite. For example, if you have `public/logo.png`, it can be accessed as `/logo.png` in the browser.
