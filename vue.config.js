// 添加 全局 配置文件
// nodejs的核心
const path = require('path')
module.exports = {
    //  关闭eslint的检查功能
    lintOnSave:false,
    // 开发服务器相关配置
    devServer:{
        // 配置静态资源目录
        contentBase: path.join(__dirname,'public'),
        // 设置开发服务器端口
        port:8240,
    },
    // 配置webpack相关
    configureWebpack:{
        // 解析
        resolve:{
            // 配置路径别名
            alias:{
                '@v':path.resolve(__dirname,"src/views"),
                '@c':path.resolve(__dirname,"src/components")
            }
        }
    }
}