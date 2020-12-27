import SpritePlugins from './spritesmith.js';
import webpack from 'webpack';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import Dotenv from 'dotenv-webpack';
// get current directory for BrowserSyncPlugin
const pathTheme = path.basename(__dirname);
// get current site for BrowserSyncPlugin
for(var i = 0, a =  process.cwd().split('\\'), c = a.length; i < c; i++){
  let pattern = /\./
  if(pattern.test(a[i])){
    var site = a[i];
    break;
  }
}
// set plugins to an empty array
var plugins = [];

plugins.push(new webpack.DefinePlugin({
  LANG: JSON.stringify("en")
}))

// lint styles
plugins.push(new StyleLintPlugin({
  configFile: './config/plugins/.stylelintrc',
  context: 'src/scss',
  files: '**/*.scss',
  failOnError: false,
  quiet: true,
}))
BrowserSyncPlugin
plugins.push(new BrowserSyncPlugin({
  files: ["**/**/*.*"],
  reloadOnRestart: true,
  proxy: "http://dev.staging.lifefonemedalert.com/?cookiereset=1",
}))
// extract styles
plugins.push(new MiniCssExtractPlugin({
  // Options similar to the same options in webpackOptions.output
  // both options are optional
  filename: "css/[name].css",
  chunkFilename: "css/[id].css",
}))

plugins.push(new Dotenv({
  path: './config/env/.env.' + process.env.NODE_ENV,
}))

// build SpritePlugins based on how many sprites directories are found
for(var i = 0, c = SpritePlugins.length;i<c;i++){
  plugins.push(SpritePlugins[i]);
}



module.exports = plugins;
