module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-typescript',
    'plugin:eslint-comments/recommended',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
};
