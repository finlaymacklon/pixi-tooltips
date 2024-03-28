'use strict';

const path = require('path');

const PATHS = {
  src: path.resolve(__dirname, '../src'),
  Flatted: path.resolve(__dirname, '../node_modules/flatted/index.js'),
  PixiSampler: path.resolve(__dirname, '../src/PixiSampler.js'),
  build: path.resolve(__dirname, '../build'),
};

module.exports = PATHS;
