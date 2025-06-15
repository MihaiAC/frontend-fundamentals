const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "./src/acme-mfe-vue-counter.js",
  output: {
    libraryTarget: "system",
    path: path.resolve(__dirname, "dist"),
    filename: "acme-mfe-vue-counter.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  devServer: {
    port: 9002,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    devMiddleware: {
      writeToDisk: true,
    },
  },
  externals: ["@acme/shared-state"],
};
