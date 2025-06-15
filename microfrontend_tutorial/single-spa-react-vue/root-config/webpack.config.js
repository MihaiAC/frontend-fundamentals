const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/acme-root-config.js",
  output: {
    libraryTarget: "system",
    path: path.resolve(__dirname, "dist"),
    filename: "acme-root-config.js",
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.ejs",
      // This is important for the importmap
      inject: false,
    }),
  ],
  devServer: {
    port: 9000,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    // This allows navigating to different routes in a single-page app
    historyApiFallback: true,
  },
  // We don't want to bundle single-spa
  externals: ["single-spa"],
};
