// 引入配置
const config = require("./config/index.js");
// 是否为生产环境
const isBuildEnv = function () {
  return process.env.NODE_ENV === "production";
};
// export
module.exports = {
  // 部署应用包时的基本 URL:
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。
  // 如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。
  // 例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。
  publicPath: isBuildEnv() ? config.build.publicPath : config.local.publicPath,

  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
  // 注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
  outputDir: config.build.outputDir,

  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: config.build.assetsDir,

  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  indexPath: config.build.indexPath,

  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
  // 然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。
  // 如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
  filenameHashing: true,

  // 在 multi-page 模式下构建应用
  // pages: [

  // ],
  // webpack配置
  configureWebpack: {
    plugins: [],
    // 外链的方式引用资源，不会打包到项目中
    externals: {},
    module: {
      rules: [],
    },
  },

  // devServer代理
  devServer: {
    host: "0.0.0.0",
    // 项目运行是否自己打开
    open: true,
    // 自定义修改端口
    port: config.local.port,
    // https
    https: false,
    // proxy配置跨域:
    proxy: config.local.proxy,
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [],
    },
  },
};
