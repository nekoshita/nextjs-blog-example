// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPlugins = require("next-compose-plugins");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withOptimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  withOptimizedImages(),
  {
    env: {
      ENABLE_BASIC_AUTH: process.env.ENABLE_BASIC_AUTH,
      VERCEL_ENV: process.env.VERCEL_ENV,
    },
  },
]);
