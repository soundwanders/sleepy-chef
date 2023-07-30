const { createTransformer } = require('babel-jest');

module.exports = createTransformer({
  presets: ['@babel/preset-react', '@babel/preset-env'],
});
