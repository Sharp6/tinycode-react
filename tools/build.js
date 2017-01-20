/* eslint-disable no-console */
/*
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';
*/
var webpack = require('webpack');
var webpackConfig = require('../webpack.config.prod');
var chalk = require('chalk');

process.env.NODE_ENV = 'production';
console.log(chalk.blue('Generating minified bundle'));

webpack(webpackConfig).run(function(err,stats) {
  if(err) {
    console.log(chalk.red(err));
    return 1;
  } else {

    var jsonStats = stats.toJson();

    if(jsonStats.hasErrors) {
      return jsonStats.errors.map(function(error){ return console.log(chalk.red(error))});
    }

    if(jsonStats.hasWarnings) {
      console.log(chalk.yellow("Webpack generated the following warnings:"));
      jsonStats.warnings.map(function(warning) { return console.log(chalk.yellow(warning))});
    }

    console.log('Webpack stats:', stats);

    console.log(chalk.green("App has been built in /dist"));

    return 0;
  }
});
