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
