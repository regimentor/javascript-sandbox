const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: `${__dirname}/src/index.js`
  },

  devServer: {
    contentBase: `${__dirname}/dist`,
    port: 9000,
    historyApiFallback: {
      index: "/"
    }
  },

  output: {
    filename: `[name].bundle.js`,
    path: `${__dirname}/dist`
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.template.html`
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        include: [`${__dirname}/client`],
        use: [
          {
            loader: "babel-loader",
            query: {
              presets: ["stage-0"]
            }
          }
        ]
      },
      {
        test: /\.css/,
        exclude: [/node_modules/],
        include: [`${__dirname}/src`],
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: "[local]--[hash:base64:5]"
            }
          }
        ]
      }
    ]
  }
};
