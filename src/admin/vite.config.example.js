const { mergeConfig } = require('vite');

module.exports = (config) => {
  // Important: always return the modified config
  return mergeConfig(config, {
     server: {
      allowedHosts: ['app.bunnx.com'],
      host: '0.0.0.0',
      port: 1337
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  });
};
