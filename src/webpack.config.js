module.exports = {
  mode: "production",
  entry: "./src/RadioButtonTag.js",
  output: {
    library: 'RadioButtonTag',
    libraryExport: 'default',
    libraryTarget: 'var',
    filename: 'RadioButtonTag.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
//          'style-loader',
//          'css-loader',
//          { loader: "css-loader", options: { url: false } },
//          'style-loader', 'css-loader', 
//          { loader: "style-loader", options: { injectType: "linkTag" } },
//          { loader: "style-loader" }, 
          {
            loader: "babel-loader",
            options: {
              presets: [
                // ES2020 を ES5 に変換
                "@babel/preset-env",
              ],
              plugins: [
                // private # を使えるようにする
                "@babel/plugin-proposal-private-methods"
              ],
            },
          },
        ],
      },
    ],
  },
  // ES5(IE11等)向け
  target: ["web", "es5"],
};

