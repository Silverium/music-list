module.exports = {
  trailingComma: 'always',
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
