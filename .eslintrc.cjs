/* eslint-env node */
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended-type-checked",
    "eslint:recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint/eslint-plugin"],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    project: "tsconfig.json",
  },
  env: {
    es6: true,
    node: true,
  },
  root: true,
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "no-console": 0,
    "no-multiple-empty-lines": "error",
    "no-multi-spaces": "error",
    "no-var": "error",
    "prefer-const": "error",
    semi: "error",
    "space-in-parens": "error",
  },
};
