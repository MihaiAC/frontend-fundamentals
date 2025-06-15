const path = require("path");

module.exports = {
  entry: "./src/acme-shared-state.js",
  output: {
    libraryTarget: "system", // ???
    path: path.resolve(__dirname, "dist"),
    filename: "acme-shared-state.js",
  },
  mode: "development",
  devServer: {
    port: 9003,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
