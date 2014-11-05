module.exports = function(grunt) {

  grunt.initConfig({
    phantomas: {
      gruntSite : {
        options : {
          indexPath : './build/',
          options   : {},
          url       : 'http://localhost:8100/bundles/external/res/performance/checkout.html',
          buildUi   : true
        }
      }
    },

    devperf: {
      options: {
        urls: [
          'http://localhost:8100/bundles/external/res/performance/checkout.html'
        ],
        numberOfRuns: 10,
        timeout: 120,
        openResults: true,
        resultsFolder: './devperf'
      }
    }    
  });

  grunt.loadNpmTasks('grunt-phantomas');
  grunt.loadNpmTasks('grunt-devperf');

  grunt.registerTask('default', ['phantomas']);
};