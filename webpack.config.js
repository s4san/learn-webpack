const env = require('dotenv').config();
const htmlWebpackPlugin = require('html-webpack-plugin');

console.log(process.env.HOST, process.env.PORT);

module.exports = {
  devServer: {
    // Display only errors
    stats: "errors-only",
    host: process.env.HOST,
    port: process.env.PORT,
    open: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'Learn Webpack',
    }),
  ],
};
