const path = require("path");

module.exports = {
  trailingSlash: true,
  
  theme: {
    extend: {
      scale: {
        '180': '1.8',
        '200': '2.0',
        '250': '2.5',
      },
    },
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};