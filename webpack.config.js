const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: './src/index',
    output: {
        path: `${__dirname}/bundle`,
        filename: 'defi-router.min.js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    externals: {
      fabric: {
        commonjs: 'defi',
        commonjs2: 'defi',
        amd: 'defi',
        root: 'defi',
      },
    },
};
