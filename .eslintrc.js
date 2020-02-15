module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    singleQuote: 0,
    trailingComma: 0,
    semiColon: 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}