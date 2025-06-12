const { mergeConfig } = require('vite');

module.exports = (config) => {
  return mergeConfig(config, {
    server: {
      allowedHosts: ['app.bunnx.com', 'localhost', '127.0.0.1', '0.0.0.0'],
      host: '0.0.0.0',
      port: 1337,
      strictPort: true,
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  });
};
