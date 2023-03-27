module.exports = {
    title: "Wordle Clone",
    components: 'src/components/**/*.js',
    webpackConfig: {
        module: {
          rules: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
            }
          ]
        }
    }
}