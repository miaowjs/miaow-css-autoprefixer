var autoprefixer = require('autoprefixer-core');
var postcss = require('postcss');

module.exports = function (option, cb) {
  postcss([autoprefixer]).process(this.contents).then(function (result) {
    this.contents = new Buffer(result.css);
    cb();
  }.bind(this));
};
