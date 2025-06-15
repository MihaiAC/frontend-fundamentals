const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

delete deps["@acme/shared-logic"];

module.exports = {
  mode: "development",
  entry: "./src/index",
  devServer: { port: 9001 },
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
  plugins: [
    new ModuleFederationPlugin({
      name: "reactButtonApp",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Button",
      },
      shared: {
        ...deps,
        "@acme/shared-logic": {
          singleton: true,
        },
        react: { singleton: true, requiredVersion: deps.react },
        "react-dom": { singleton: true, requiredVersion: deps["react-dom"] },
        rxjs: { singleton: true, requiredVersion: deps.rxjs },
      },
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
