module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'airbnb-typescript',
    'plugin:prettier/recommended'
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