const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://16.16.197.20:8080',
      changeOrigin: true,
    })
  );
};
