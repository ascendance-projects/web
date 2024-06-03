/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {browser: true, es2020: true, node: true},
  extends: ['eskiu/ts-react', 'next/core-web-vitals'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    // your rules
    'arrow-body-style': 'off',
    'no-duplicate-imports': 'off',
    'new-cap': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-child-element-spacing': 'off',
  },
};
