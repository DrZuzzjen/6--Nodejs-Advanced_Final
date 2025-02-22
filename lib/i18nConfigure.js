'use strict';

const i18n = require('i18n');
const path = require('path');

i18n.configure({
  locales: ['en', 'es'],
  directory: path.join(__dirname, '..', 'locales'),
  defaultLocale: 'es',
  autoReload: true, // recargar ficheros de idioma si cambian
  syncFiles: true, // crear literales en todos los idiomas a la vez
  cookie: 'nodeapi-locale',
});

// por si usamos i18n en script
i18n.setLocale('en');

module.exports = i18n;