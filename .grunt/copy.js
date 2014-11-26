module.exports = {
    dist: {
        files: [
            {
                expand: true,
                dot: true,
                cwd: "<%= yeoman.app %>",
                dest: "<%= yeoman.dist %>",
                src: [
                    "*.{ico,png,txt}",
                    "*.config",
                    "*.html",
                    "views/{,*/}*.html",
                    "images/{,*/}*.{webp}"
                ]
            }
        ]
    }
};