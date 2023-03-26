module.exports = {
  '*.css': ['stylelint --fix'],
  '*.{ts,tsx,js,json}': ['eslint --cache --fix'],
  '*.md': ['prettier --write'],
};
