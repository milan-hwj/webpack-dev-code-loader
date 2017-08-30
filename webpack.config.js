var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main : './demo/main.js'
    },
    output: {
        path: path.join(process.cwd(), './demo/'),
        filename : '[name].dist.js'
    },
    devtool: '#source-map',
    resolve: {
        root: [path.resolve('./src'), path.resolve('./lib')],
        extensions: ['', '.js']
    },
    resolveLoader: {
        alias: {
            'devMock': path.resolve('./src/main.js')
        }
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
        // new webpack.optimize.UglifyJsPlugin({
        //     minimize: false,
        //     compress: {
        //         warnings: false
        //     }
        // })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'devMock'
            }
        ]
    }
};

