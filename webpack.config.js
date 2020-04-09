const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    entry:'./js/main.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle.js',
    },
    module:{
        rules:[
            {
            test:/\.css$/,
            use:['style-loader','css-loader']
            },
            {
            test:/\.(svg|eot|woff|woff2|ttf)$/,
            use:'url-loader'
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./index.html'),
            filename:'index.html'
        })
    ]
}