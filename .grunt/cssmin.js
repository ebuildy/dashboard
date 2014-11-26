module.exports = {
    banner: "/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today(\"yyyy-mm-dd\") %> */",
    dist: {
        files: [
            {
                expand: true,
                cwd: "<%= yeoman.dist %>/styles",
                src: "*.css",
                dest: "<%= yeoman.dist %>/styles"
            }
        ]
    }
};