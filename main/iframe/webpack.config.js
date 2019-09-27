const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: 'loadProgram.js',//已多次提及的唯一入口文件
    output: {
      path:path.resolve(__dirname,"dist"),//打包后的文件存放的地方
      filename: "loadProgram.js"//打包后输出文件的文件名
    },
    devtool: 'source-map',
    devServer: {
        // contentBase: "/",//本地服务器所加载的页面所在的目录
        port:5000,
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.js)$/,
                loader: "babel-loader",
                exclude: [path.resolve(__dirname, 'node_modules')],
            }
        ]
    },
    resolve: {
		modules: [
			__dirname,
			'node_modules',
		],
    },
    node: {
		fs: 'empty'
	},
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/index.html"//new 一个这个插件的实例，并传入相关的参数
        })
    ],
}