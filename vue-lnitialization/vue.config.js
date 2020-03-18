module.exports = {
    // 基本路径
    // 输出文件目录
    outputDir: 'dist',
    // webpack-dev-server 相关配置
    productionSourceMap: false,
    // css相关配置
    devServer: {
        host: 'localhost', //默认是 localhost。如果你希望服务器外部可访问，指定如下 host: '0.0.0.0'，设置之后之后可以访问ip地址
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                ws: true, //是否代理websockets
                changeOrigin: true // 设置同源  默认false，是否需要改变原始主机头为目标URL
            }
        }
    },
    publicPath: './',
    assetsDir: 'static',
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
}