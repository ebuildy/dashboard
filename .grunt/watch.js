module.exports = {
    js: {
        files: [
            "<%= yeoman.app %>/scripts/{,*/}*.js"
        ],
        tasks: [
            "concat:js",
        ]
    },
    compass: {
        files: [
            "<%= yeoman.app %>/styles/{,*/}*.scss"
        ],
        tasks: [
            "compass:server",
            "autoprefixer",
            "concat:css",
        ]
    },
    livereload: {
        options: {
            livereload: "<%= connect.options.livereload %>"
        },
        files: [
            "<%= yeoman.app %>/*.html",
            "<%= yeoman.app %>/views/{,*/}*.html",
            ".tmp/styles/{,*/}*.css",
            ".tmp/scripts/*.js",
            "<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}"
        ]
    }
};