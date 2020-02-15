module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    'airbnb-typescript',

  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    singleQuote: 0,
    trailingComma: 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}