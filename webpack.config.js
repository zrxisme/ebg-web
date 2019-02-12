const path = require("path");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const glob = require("glob");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackConfig = {
  entry: {},
//  devtool: "cheap-module-source-map",
  output: {
    path: path.join(__dirname, "./libs"),
    filename: "./[name]/index.js",
    libraryTarget: "umd",
    library: "ReactCmp"
  },
  resolve:{
   alias:{
    "macro-view-component-react-test/libs/**/style":"macro-view-component-react-test/libs/**/style/index.css"
   }
  },
  plugins: [
    new cleanWebpackPlugin(["libs"]),
    new ExtractTextPlugin("./[name]/style/index.css"),
    new OptimizeCssAssetsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          ...ExtractTextPlugin.extract({
            fallback:"style-loader",
            use: "css-loader"
          }),
          // {
          //   loader: "px2vw-view-loader",
          //   query: {
          //     viewportWidth: 375,
          //     viewportUnit: "vw",
          //     minPixelValue: 1,
          //     decimal: 3
          //   }
          // }
        ]
      },
      {
        test: /\.(jpg|png|gif|bmp|jpeg)$/,
        use: "url-loader?limit=5000&name=images/[hash:8]-[name].[ext]"
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: "url-loader?limit=5000&name=images/[hash:8]-[name].[ext]"
      },
      {
        test: /\.js$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  }
};


// 获取指定路径下的入口文件
function getEntries(globPath) {
  const files = glob.sync(globPath),
    entries = {};
  files.forEach(function(filepath) {
    const split = filepath.split("/");
    let name = split[split.length - 2];
    if(name==='components'){
      name = "./"
    }
    entries[name] = "./" + filepath;
  });
  return entries;
}


const entries = getEntries("components/**/index.js");

Object.keys(entries).forEach(function(name) {
  webpackConfig.entry[name] = entries[name];
  // const plugin = new HtmlWebpackPlugin({
  //   filename: name + ".html",
  //   template: "./public/index.html",
  //   inject: true,
  //   chunks: [name]
  // });
  // webpackConfig.plugins.push(plugin);
});

module.exports = webpackConfig;