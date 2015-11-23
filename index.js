var autoprefixer = require('autoprefixer-core');
var postcss = require('postcss');

var pkg = require('./package.json');

module.exports = function(options, callback) {
  var context = this;
  var contents = context.contents.toString();
  if (!contents.trim()) {
    return callback();
  }

  try {
    postcss([autoprefixer(options)]).process(contents).then(function(result) {
      context.contents = new Buffer(result.css);
      callback();
    }, callback);
  } catch (err) {
    callback(err);
  }
};

module.exports.toString = function() {
  return [pkg.name, pkg.version].join('@');
};
