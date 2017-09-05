/**
 * Grunt Task Runner
 *
 * This is simply to facilitate local development. To build any files, use the
 * according Metalsmith plugin.
 */

module.exports = function(grunt) {

  // Get any options
  // type takes 'prerelease', 'patch', 'minor', 'major'
  var type = grunt.option('type') || 'patch';

  // Load all grunt plugins
  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

  // Create the Grunt configuration
  var config = {

    // Load data from package.json
    pkg: grunt.file.readJSON('package.json'),

    // Execute Metalsmith
    exec: {
      build: {
        cmd: 'npm run generate'
      },
    },

    // Watch files and run tasks when changed
    watch: {
      all: {
        files: [
          'assets/css/**/*',
          'assets/js/**/*',
          'pages/**/*',
          'layouts/**/*',
          'components/**/*'
        ],
        tasks: ['build'],
        options: {
          spawn: false,
          interupt: true,
          livereload: false
        },
      },
    }

  };

  // Initialize the configuration.
  grunt.initConfig(config);

  // Register tasks
  grunt.registerTask('build', ['exec:build']);
  //grunt.registerTask('watch', ['watch']);
  grunt.registerTask('default', ['build', 'watch']);

};
