module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  singleQuote: true,
  overrides: [
    {
      files: '*.scss',
      options: { singleQuote: false },
    },
  ],
  proseWrap: 'always',
};
