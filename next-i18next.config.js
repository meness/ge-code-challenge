/** @type {import('next-i18next').UserConfig} */
const options = {
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US'],
  },
  reloadOnPrerender: true,
  cleanCode: true,
  keySeparator: '.',
  contextSeparator: '_',
  fallbackLng: false,
  fallbackNS: false,
  nsSeparator: ':',
};

module.exports = options;
