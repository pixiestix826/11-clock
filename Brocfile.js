// Pulls in the `merge` function with NPM
var Merge = require('broccoli-merge-trees');
var Sass = require('broccoli-sass');

var stylePath = [
  'sass',
  'bower_components/normalize-css',
  'bower_components/bourbon/app/assets/stylesheets',
  'bower_components/neat/app/assets/stylesheets',
  'bower_components/font-awesome/scss',
];

var styles = new Sass(stylePaths, 'app.scss', 'app.css');

module.exports = new Merge(['public', styles], {overwrite: true});
