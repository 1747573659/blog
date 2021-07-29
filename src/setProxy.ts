const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('api1', {
      target: 'http://xxxxxx',
      changeOrigin: true,
      pathRewrite: {'^/api1': ''}
    })
  )
}