## About

This is a React-based frontend app for my personal website and blog. The pretty stuff are built mostly using the Chakra UI component library. The project is designed to be a lightweight, fast, and responsive web application. The app is designed to be extremely easily extensible and customizable, with a focus on clean and modular code.

### Features (and my preferences)

- I created a **'SSO'-wanna-be** system by rendering a lot of things and hydrating them during the build process. The reason I don't use easier solutions like Next.js is because I didn't think about it until a year into the project, and also because I can.
- I like raw React based on functional components and hooks, so I'm using that.
- I like Chakra UI for its adherence to React's original philosophy and its extensibility, so I'm using that.
- I **dislike Redux** as it does not adhere to React's original philosophy, so instead of that I created my own **state management system** and pattern. Most of them are split into multiple files, but you can see a non-refactored version in `pages/Blog/BlogMaker.js`.
- I am well-aware that the project structure is an overkill for a small project like this, but I do it anyway coz I can.

### Structure

```
src/
├── APIs/                     # Contains API configurations for communicating with the backend
├── components/               # Reusable UI components and layout elements
├── config/                   # API and Page Route configurations
├── features/                 # Feature-specific logic and modules (e.g., posts, admin)
├── pages/                    # Page components corresponding to different routes
├── peripherals/              # Peripheral utilities and additional resources
├── theme/                    # Theming-related files and customized global styles for Chakra UI
├── App.js                    # Main application entry point - uses the component "Foundational"
├── index.js                  # Main rendering and hydration logic
└── logo.svg                  # Application logo
```