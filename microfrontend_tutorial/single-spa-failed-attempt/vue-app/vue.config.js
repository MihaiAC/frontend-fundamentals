module.exports = {
  configureWebpack: {
    output: {
      libraryTarget: "system",
    },
    externals: ["vue"],
  },
  filenameHashing: false,
  devServer: {
    port: 8700,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
