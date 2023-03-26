const options = {
  // Save the \_old files
  createOldCatalogs: false,

  // Indentation of the catalog files
  indentation: 4,

  // Key separator used in your translation keys
  // If you want to use plain english keys, separators such as `.` and `:` will conflict. You might want to set `keySeparator: false` and `namespaceSeparator: false`. That way, `t('Status: Loading...')` will not think that there are a namespace and three separator dots for instance.
  keySeparator: '.',

  // Control the line ending. See options at https://github.com/ryanve/eol
  lineEnding: 'lf',

  // An array of the locales in your applications
  locales: ['fa-IR'],

  // Namespace separator used in your translation keys
  // If you want to use plain english keys, separators such as `.` and `:` will conflict. You might want to set `keySeparator: false` and `namespaceSeparator: false`. That way, `t('Status: Loading...')` will not think that there are a namespace and three separator dots for instance.
  namespaceSeparator: ':',

  // Supports $LOCALE and $NAMESPACE injection
  // Supports JSON (.json) and YAML (.yml) file formats
  // Where to write the locale files relative to process.cwd()
  output: 'public/locales/$LOCALE/$NAMESPACE.json',

  // An array of globs that describe where to look for source files
  // relative to the location of the configuration file
  input: ['src/**/*.{ts,tsx}'],

  // Whether or not to sort the catalog. Can also be a [compareFunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#parameters)
  sort: true,
};

module.exports = options;
