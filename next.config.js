module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.node = {
      dns: "mock",
      fs: "empty",
      path: true,
      url: false,
    };
    return config;
  },
};
