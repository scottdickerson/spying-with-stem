module.exports = {
  containerQuerySelector: "#root",
  webpackConfigPath: "react-scripts/config/webpack.config.dev",
  publicPath: "public",
  // Optional: Create this file when you begin adding proxies
  proxiesPath: "cosmos.proxies",
  globalImports: ["./src/index.css"]
};
