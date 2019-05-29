// fileTransformer.js
const path = require('path');

module.exports = {
  process(src, filename, config, options) {
    // eslint-disable-next-line prefer-template
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  },
};
