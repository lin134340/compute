const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
 
module.exports = {
    module:
    {
        rules:
        [
            {
                test: /\.js$/,
                use: 
                {
                    loader: 'babel-loader',
                    options: {
                        ignore: ['node_modules/jqwidgets-scripts/jqwidgets'],
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|gif|svg|pdf|ico)$/,
                use: 
                [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins:
    [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new ExtractTextPlugin('style.css')
    ]
}