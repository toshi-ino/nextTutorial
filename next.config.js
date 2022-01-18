module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.node = {
      unstable_webpack5: true,
      dns: "mock",
      fs: "empty",
      path: true,
      url: false,
    };
    return config;
  },
};
