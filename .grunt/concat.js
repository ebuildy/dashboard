module.exports = {
    js: {
        src: [
            "<%= yeoman.app %>/scripts/app.js",
            "<%= yeoman.vendor %>/angular-gridster/dist/angular-gridster.min.js",
            "<%= yeoman.app %>/scripts/*/*"
        ],
        dest: "<%= yeoman.dist %>/scripts/angular-dashboard.js"
    },
    css: {
        src: [
            "<%= yeoman.tmp %>/styles/*.css",
            "<%= yeoman.vendor %>/angular-gridster/dist/angular-gridster.min.css",
        ],
        dest: "<%= yeoman.dist %>/styles/angular-dashboard.css"
    }
};