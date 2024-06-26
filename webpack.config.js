const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: "src/index.html",
})],
watch: true,
watchOptions: {
    ignored: "/node_modules/"
},
devtool:"eval-source-map"
};