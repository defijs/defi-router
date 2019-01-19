module.exports = {
    devtool: 'source-map',
    entry: './src/index',
    optimization: { minimize: true },
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
    externals: {
      fabric: {
        commonjs: 'defi',
        commonjs2: 'defi',
        amd: 'defi',
        root: 'defi',
      },
    },
};
