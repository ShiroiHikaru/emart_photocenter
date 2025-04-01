import globals from 'globals';
import { defineConfig } from 'eslint/config';
import js from '@eslint/js';

export default defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    files: ['**/*.js'],
    plugins: {
      js,
    },
    extends: ['js/recommended'],
    rules: {
      camelcase: ['warn', { properties: 'always' }],
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'arrow-body-style': 'off',
      'no-plusplus': 'off',
      'no-restricted-exports': ['error', { restrictDefaultExports: { defaultFrom: false } }],
      'no-param-reassign': ['error', { props: false }],
      'no-unused-expressions': ['warn'],
      'no-shadow': 'off',
      'prefer-destructuring': ['error', { object: true, array: false }],
      'lines-between-class-members': 'off',
    },
  },
]);

//   "rules": {
//     "jsx-a11y/click-events-have-key-events": "off",
//     "jsx-a11y/label-has-associated-control": [
//       "error",
//       {
//         "labelComponents": ["label"],
//         "labelAttributes": ["htmlFor"],
//         "controlComponents": ["input"]
//       }
//     ]
//   },
//   "globals": { "navigation": "readonly", "globalThis": false, "NodeJS": true }
// }
