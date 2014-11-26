module.exports = {
    options: {
        port: 8000,
        hostname: "localhost",
        livereload: 35729
    },
    livereload: {
        options: {
            open: true,
            middleware: function (connect) {
                return [
                    connect().use( '/dist', connect.static('./dist')),
                    connect().use( '/bower_components', connect.static('./bower_components')),
                    connect.static('./demo')
                ];
            }
        }
    },
    test: {
        options: {
            port: 9001
        }
    },
    dist: {
        options: {
            open: true,
            base: "<%= yeoman.dist %>"
        }
    }
};