const path = require("path");

module.exports = {
  
  trailingSlash: true,
  
  serverRuntimeConfig: {
    LOCAL_URL: 'http://localhost:3000',
    NEXT_PUBLIC_VERCEL_URL: 'https://sleepychef.vercel.app'
  },
  publicRuntimeConfig: {
    staticFolder: '/static'
  },

  theme: {
    extend: {
      scale: {
        '50': '0.5',
        '120': '1.2',
        '130': '1.3',
        '140': '1.4',
        '150': '1.5',
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