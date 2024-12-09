const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "bytebank",
    projectName: "styleguide",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    devServer: {
      port: 8081,
    },
    output: {
      filename: "styleguide.js",
      library: "styleguide",
      libraryTarget: "umd",
      globalObject: "this",
    },
    externals: {
      react: "react",
      "react-dom": "react-dom",
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["postcss-loader"],
        },
      ],
    },
  });
};
