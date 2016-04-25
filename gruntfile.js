module.exports = function (grunt) {
    var scriptTarget = 'src/lib/', cssTarget = 'src/css/';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            install: {
                options: { targetDir: 'bower_components' }
            }
        },
        copy: {
            main: {
                files: [
                    { expand: true, flatten: true, src: ['bower_components/**/*.min.js'], dest: scriptTarget, filter: 'isFile' },
                    { expand: true, flatten: true, src: ['bower_components/**/*.min.css'], dest: cssTarget, filter: 'isFile' },
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-bower-task');

    grunt.registerTask('default', ['bower', 'copy']);

};