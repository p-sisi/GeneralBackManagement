const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false, //关闭语法检查
    devServer: {
        proxy: 'http://localhost:5000' //这里的5000端口就是你需要跨域请求的服务器的端口号，只需要写到端口号
    }
})