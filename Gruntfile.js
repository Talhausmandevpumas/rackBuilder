module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-config')(grunt);

  // Load necessary npm tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss'); // For Tailwind CSS
  grunt.loadNpmTasks('grunt-stylelint');

  // Configure tasks
  grunt.initConfig({
    sass: {
      options: {
        implementation: require('sass'), // Ensure you're using Dart Sass
      },
      dist: {
        files: {
          'assets/dist/theme-bundle.main.css': 'assets/scss/theme.scss' // Define input and output
        }
      }
    },
    postcss: {
      options: {
        processors: [
          require('tailwindcss'), // Add Tailwind
          require('autoprefixer'), // Add Autoprefixer
        ]
      },
      dist: {
        src: 'assets/dist/theme-bundle.main.css', // Process the generated CSS
      }
    },
  });

  // Register default tasks
  grunt.registerTask('default', ['sass', 'postcss']);
  grunt.registerTask('build', ['sass', 'postcss']);
};
