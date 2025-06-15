const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.single-spa.js",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  experiments: {
    outputModule: true,
  },
  output: {
    filename: "react-app.js",
    path: path.resolve(__dirname, "dist"),
    library: { type: "module" },
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: "source-map",
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
};
