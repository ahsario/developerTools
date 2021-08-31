const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolve } = require("path"); // 1

module.exports = {
  entry: "./src/main.js",
  output: {
    path: resolve(__dirname, "build"), // 2
    filename: "main.[contenthash].js", // 3
  },
  module: {
    rules: [
      {
        test: /\\.(png|jpe?g|gif|mp3)$/i, // 1
        use: "file-loader", // 2
      },
      {
        test: /\\.css$/, // 1
        use: [MiniCssExtractPlugin.loader, "css-loader"], // 2
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: resolve(__dirname, "index.html") }),
    new MiniCssExtractPlugin({
      // 2
      filename: "[name].[contenthash].css", // 3
    }),
  ],
  devServer: {
    port: 9000,
  },
};
