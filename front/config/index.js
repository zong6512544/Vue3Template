/*
 * @Author: zongbao.yao
 * @Date: 2021-12-27 19:22:34
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2021-12-28 09:46:19
 * @Description: 项目基本配置信息
 */
const proxy = require('./local/proxy.js')

module.exports = {
    // 本地开发配置
    local: {
        publicPath: '/',
        sourceMap: true,
        assetsSubDirectory: 'static',
        devtool: '#cheap-source-map',
        proxy: proxy.proxy,
        port: proxy.port
    },
    // 打包配置
    build: {
        publicPath: './',
        outputDir: 'dist',
        assetsDir: 'static',
        indexPath: 'index.html',
        sourceMap: false,
        devtool: '#source-map',
        // Paths
        // assetsRoot: path.resolve(__dirname, '../dist'),
    }
}
