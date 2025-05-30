const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/'
};

module.exports = {
  devServer: {
    port: 8080
  }
};