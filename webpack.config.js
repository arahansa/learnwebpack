module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url'
            }
            ,{ test: /\.css$/, loader: 'css-loader!autoprefixer-loader'}    
            ,{ test: /\.scss$/, loaders: ["style", "css", "sass"]}
        ]
    }
};