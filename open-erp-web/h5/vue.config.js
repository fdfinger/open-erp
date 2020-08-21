module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/h5/'
  : '/',
  devServer: {
    port: 8089,
    disableHostCheck: true,
    proxy: {
      '/test': {
        target: 'http://118.190.237.48:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/test': '/'
        }
      }
    }
  }
}