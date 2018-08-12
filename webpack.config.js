const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    // Display only errors
    stats: "errors-only",
    host: process.env.HOST,
    port: provess.env.PORT,
    open: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'Learn Webpack',
    }),
  ],
};
