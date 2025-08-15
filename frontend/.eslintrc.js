module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,            // <--- add this line
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended"  // <--- add this line too
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
    "jest"                  // <--- add this plugin
  ],
  rules: {
    "react/react-in-jsx-scope": "off",  // JSX React in scope is unnecessary in React 17+
  },
  settings: {
    react: { version: "detect" },
  },
};
