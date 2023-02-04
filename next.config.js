const path = require("path");

const nextConfig = {
  trailingSlash: true,
  
  serverRuntimeConfig: {
    LOCAL_URL: "http://localhost:3000",
    NEXT_PUBLIC_VERCEL_URL: "https://sleepychef.vercel.app"
  },
  publicRuntimeConfig: {
    staticFolder: "/static"
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig
