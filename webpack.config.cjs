const path = require('path');

module.exports = {
  target: 'node16.13',
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    module: true,
  },
  experiments: {
    outputModule: true,
  },
};
