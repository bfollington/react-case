module.exports = {
    entry: "./test.js",
    output: {
        path: __dirname,
        filename: "test-bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    }
};
