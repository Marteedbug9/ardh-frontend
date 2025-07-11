const path = require('path');
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  webpack(config) {
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    return config;
  },
  // autres options Next.js ici si besoin
};
