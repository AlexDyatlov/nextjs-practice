module.exports = {
  printWidth: 120,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  endOfLine: 'auto',
  trailingComma: "none",
  arrowParens: 'avoid',
  overrides: [
    {
      files: ['*.yml', '*.yaml', '*.json'],
      options: {
        singleQuote: false
      }
    }
  ]
}