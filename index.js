// Generated by CoffeeScript 1.7.1
var ck, gulpCoffeekup, gutil, through;

gutil = require('gulp-util');

through = require('through2');

ck = require('coffeekup');

gulpCoffeekup = function(options) {
  return through.obj(function(file, enc, cb) {
    var err, html;
    if (file.isNull()) {
      this.push(file);
      return cb();
    }
    if (file.isStream()) {
      this.emit('error', new gutil.PluginError('gulp-coffeekup', 'Streaming not supported'));
      return cb();
    }
    try {
      html = ck.render(file.contents.toString(), {}, options);
      file.contents = new Buffer(html);
      file.path = gutil.replaceExtension(file.path, '.html');
    } catch (_error) {
      err = _error;
      this.emit('error', new gutil.PluginError('gulp-coffeekup', err));
    }
    this.push(file);
    return cb();
  });
};

module.exports = gulpCoffeekup;
