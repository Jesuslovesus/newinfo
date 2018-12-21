// vue.config.js
module.exports = {
  // 跨域 ----------------------------------------
  // 将baseUrl: '/api',改为baseUrl: '/',
  // baseUrl: '/',
  devServer: {
    // proxy: 'http://jelly.lhfspace.com'
    proxy: {
      '/bread': {
        target: 'http://jelly.lhfspace.com/bread',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/bread': ''
        }
      }
    }
  },
  // devServer: {
  //   port: 8085,
  //   // 端口号
  //   host: 'localhost',
  //   // https: false, // https:{type:Boolean}
  //   // open: true, //配置自动启动浏览器
  //   // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
  //   proxy: {
  //     '/bread': {
  //       target: 'http://jelly.lhfspace.com/bread',
  //       changeOrigin: true,
  //       ws: true,
  //       pathRewrite: {
  //         '^/bread': ''
  //       }
  //     }
  //   }
  //   // 配置多个代理
  // },
  pages: {
    index: {
      // server: 'http://jelly.lhfspace.com',
      entry: 'src/views/index/main.js',
      template: 'src/views/index/index.html',
      filename: 'index.html',
      title: '1',
      inject: true,
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    share: {
      // server: 'http://jelly.lhfspace.com',
      entry: 'src/views/share/main.js',
      template: 'src/views/share/index.html',
      filename: 'share.html',
      title: '3',
      inject: true,
      chunks: ['chunk-vendors', 'chunk-common', 'share']
    },
    control: {
      // server: 'http://jelly.lhfspace.com',
      // page 的入口
      entry: 'src/views/control/main.js',
      // 模板来源
      template: 'src/views/control/index.html',
      // 在 dist/index.html 的输出
      filename: 'control.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <%= htmlWebpackPlugin.options.title %>
      title: '2',
      inject: true,
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'control']
    }
  }
}
