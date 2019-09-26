module.exports = {
  lintOnSave: false,
  // 关闭 eslint 规范
  pages: {
    index: {
      // page 的入口
      entry: 'examples/main.js',
      // 模板来源
      template: 'public/index.html',
      // 作为  dist/index.html 输出
      filename: 'index.html'
    }
  },
  // 添加自定义 webpack 配置
  chainWebpack: config => {
    config.module
    .rule('vue')
    .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  },
  css: {
    extract: false
  }
}
