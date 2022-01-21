/*
 * @Author: zongbao.yao
 * @Date: 2021-10-19 10:35:48
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2021-11-09 09:58:56
 * @Description: 本地代理配置
 */

// 端口号
const port = 8080
// 获取输入的ip
const target = process.argv[3] ? process.argv[3].replace(/^(\S)*=/, '') : ''
// 格式化ip
const formatTarget = target ? `http://${target}` : 'http://localhost'
console.log('\x1B[36m%s\x1B[0m', 'Current Proxy IP:', formatTarget)

// 配置本地proxy
const proxy = {
    // target：要使用url模块解析的url字符串
    // forward：要使用url模块解析的url字符串
    // agent：要传递给http（s）.request的对象（请参阅Node的https代理和http代理对象）
    // ssl：要传递给https.createServer（）的对象
    // ws：true / false，是否代理websockets
    // xfwd：true / false，添加x-forward标头
    // secure：true / false，是否验证SSL Certs
    // toProxy：true / false，传递绝对URL作为路径（对代理代理很有用）
    // prependPath：true / false，默认值：true - 指定是否要将目标的路径添加到代理路径
    // ignorePath：true / false，默认值：false - 指定是否要忽略传入请求的代理路径（注意：如果需要，您必须附加/手动）。
    // localAddress：要为传出连接绑定的本地接口字符串
    // changeOrigin：true / false，默认值：false - 将主机标头的原点更改为目标URL
    // '/dev': {
    //     target: formatTarget,
    //     changeOrigin: true,
    //     pathRewrite: {
    //         '^/dev': ''
    //     }
    // },
    // '/mock': {
    //     target: 'http://yapi.xbongbong.com',
    //     changeOrigin: true,
    //     pathRewrite: {
    //         '^/mock': '/mock/138'
    //     }
    // },
    '/': {
        target: formatTarget,
        changeOrigin: true,
        pathRewrite: {
            '^/': ''
        }
    },
    // '': {
    //     target: formatTarget,
    //     changeOrigin: true,
    // }
}


// 本地开发相关环境配置
module.exports = {
    proxy,
    port
}