// eslint.config.js - ESLint code quality checker configuration
// ESLint automatically checks your code for errors and bad practices
// Run manually with: npm run lint
// VS Code shows ESLint warnings as yellow underlines in your code
// You rarely need to touch this file

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // Ignore the dist folder - thats the built output, not source code
  globalIgnores(['dist']),
  {
    // Check all .js and .jsx files in the project
    files: ['**/*.{js,jsx}'],
    extends: [
      // js.configs.recommended - basic JavaScript best practices
      js.configs.recommended,
      // reactHooks - enforces rules of hooks (no hooks inside loops etc)
      reactHooks.configs.flat.recommended,
      // reactRefresh - ensures components can hot reload during development
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      // globals.browser - tells ESLint browser globals like window and document exist
      globals: globals.browser,
      // ecmaFeatures.jsx - tells ESLint to understand JSX syntax
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])
