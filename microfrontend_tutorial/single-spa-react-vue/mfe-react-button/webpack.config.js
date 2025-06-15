const path = require("path");

module.exports = {
  entry: "./src/acme-mfe-react-button.js",
  output: {
    libraryTarget: "system",
    path: path.resolve(__dirname, "dist"),
    filename: "acme-mfe-react-button.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
  devServer: {
    port: 9001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    // The 'system' library target requires this for hot-reloading
    devMiddleware: {
      writeToDisk: true,
    },
  },
  externals: ["@acme/shared-state"],
};
