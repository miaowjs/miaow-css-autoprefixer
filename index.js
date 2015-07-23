var autoprefixer = require('autoprefixer-core');
var mutil = require('miaow-util');
var postcss = require('postcss');

var pkg = require('./package.json');

module.exports = mutil.plugin(pkg.name, pkg.version, function (option, cb) {
  postcss([autoprefixer]).process(this.contents).then(function (result) {
    this.contents = new Buffer(result.css);
    cb();
  }.bind(this));
});
