/**
 * Created by B51-80 on 2017-02-23.
 */

var proxyMiddleware = require('http-proxy-middleware');

module.exports = {
    port: 8000,
    files:
        "build/**/*.{html,htm,css,js}"
    ,
    server: {
        baseDir: "build",
        middleware: {
            1: proxyMiddleware('/myApp', {
                target: 'http://192.168.33.10:8080',
                changeOrigin: true
            })
        }
    }
};