module.exports = {
    entry: {
      bundle: "./src/client.js",
      index: "./public/front.js"
    },
    output: {
        path: 'public',
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  presets: ['es2015','react'],
                  plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
            }
          }
        ]
    }
};
