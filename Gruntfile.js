module.exports = function (grunt) {
  grunt.initConfig({

    sass: {
      dist: {
        files: {
          '.tmp/style.css': 'scss/style.scss'
        }
      }
    },

    autoprefixer: {
      dist: {
        files: {
          'stylesheets/style.css': '.tmp/style.css'
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      html: {
        files: ['index.html']   // so that it causes a livereload
      },
      styles: {
        files: ['scss/style.scss'],
        tasks: ['build']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass', 'autoprefixer'])
};
