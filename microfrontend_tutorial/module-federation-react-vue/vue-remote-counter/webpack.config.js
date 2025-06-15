const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { VueLoaderPlugin } = require("vue-loader");
const deps = require("./package.json").dependencies;

delete deps["@acme/shared-logic"];

module.exports = {
  mode: "development",
  entry: "./src/index",
  devServer: { port: 9002 },

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

  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: "vueCounterApp",
      filename: "remoteEntry.js",
      exposes: {
        "./Counter": "./src/Counter.vue",
      },
      shared: {
        ...deps,
        "@acme/shared-logic": {
          singleton: true,
        },
        vue: { singleton: true, requiredVersion: deps.vue },
        rxjs: { singleton: true, requiredVersion: deps.rxjs },
      },
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
