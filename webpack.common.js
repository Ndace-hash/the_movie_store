const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  plugins: [
    new htmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
