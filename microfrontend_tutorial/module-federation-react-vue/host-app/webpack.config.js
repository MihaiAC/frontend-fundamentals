const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = {
  mode: "development",
  entry: "./src/index",
  devServer: { port: 9000 },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-react"] },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "hostApp",
      // The "address book" for the remotes.
      remotes: {
        reactButtonApp: "reactButtonApp@http://localhost:9001/remoteEntry.js",
        vueCounterApp: "vueCounterApp@http://localhost:9002/remoteEntry.js",
      },
      shared: {
        ...deps,
        react: { singleton: true, requiredVersion: deps.react },
        "react-dom": { singleton: true, requiredVersion: deps["react-dom"] },
        rxjs: { singleton: true, requiredVersion: deps.rxjs },
        vue: { singleton: true, requiredVersion: deps.vue },
      },
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
