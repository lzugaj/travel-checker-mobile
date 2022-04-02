module.exports = {
  "root": true,
  env: {
    "browser": true,
    "amd": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "typescript",
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ]
};
