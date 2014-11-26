'use strict';

module.exports = function (grunt)
{
  require('load-grunt-tasks')(grunt);

  require('time-grunt')(grunt);

  var appConfig = {
    app: require('./bower.json').appPath || 'web',
    dist: './dist',
	vendor: './bower_components',
	common: '../common',
	tmp: './.tmp'
  };

    var gruntConfig = {
        yeoman: appConfig,
        pkg: grunt.file.readJSON('package.json')
    };

    grunt.util._.extend(gruntConfig, loadConfig('./.grunt/'));

    grunt.initConfig(gruntConfig);

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'build',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('build', [
    'clean:dist',
      'compass:dist',
    'concat',
    'copy:dist',
      'cssmin',
      'uglify'
  ]);
  
  grunt.registerTask('deploy', [
	  'build',
	  'exec:deploy'
  ]);
};

function loadConfig(path) {
    var glob = require('glob');
    var object = {};
    var key;

    glob.sync('*', {cwd: path}).forEach(function(option) {
        key = option.replace(/\.js$/,'');
        object[key] = require(path + option);
    });

    return object;
}
