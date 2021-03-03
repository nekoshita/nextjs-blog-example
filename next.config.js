// eslint-disable-next-line @typescript-eslint/no-var-requires
const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages();

module.exports = {
  env: {
    ENABLE_BASIC_AUTH: process.env.ENABLE_BASIC_AUTH,
  },
};
