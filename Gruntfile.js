(function() {
    module.exports = function(grunt) {
        grunt.initConfig({
            pkg: grunt.file.readJSON("package.json"),
            banner: "/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - " + "<%= grunt.template.today(\"yyyy-mm-dd\") %>\n" + "<%= pkg.homepage ? \"* \" + pkg.homepage + \"\\n\" : \"\" %>" + "* Copyright (c) <%= grunt.template.today(\"yyyy\") %> <%= pkg.author.name %>;" + " Licensed <%= _.pluck(pkg.licenses, \"type\").join(\", \") %> */\n",
            files: {
                html: {
                    src: "app/index.html"
                },
                images: {
                    src: "app/img/**"
                },
                css: {
                    vendor: ["app/css/bootstrap.css", "app/font-awesome/css/font-awesome.css"]
                },
                less: {
                    src: ["app/less/variables.less", "app/less/mixins.less", "app/less/agency.less"]
                },
                js: {
                    vendor: ["app/js/jquery.js", "app/js/bootstrap.js", "app/js/jquery.easing.min.js",  "app/js/classie.js", "app/js/cbpAnimatedHeader.js", "app/js/jqBootstrapValidation.js"],
                    app:["app/js/contact_me.js", "app/js/agency.js"]

                },
                coffee: {
                    dest: "generated/compiled-coffee",
                    compiled: ["generated/compiled-coffee/config/**/*.js", "generated/compiled-coffee/app.js", "generated/compiled-coffee/data/**/*.js", "generated/compiled-coffee/directives/**/*.js", "generated/compiled-coffee/controllers/**/*.js", "generated/compiled-coffee/services/**/*.js", "generated/compiled-coffee/**/*.js"]
                },
                templates: {
                    src: "app/templates/**/*.html",
                    compiled: "generated/template-cache.js"
                }
            },
            concat: {
                options: {
                    sourceMap: true
                },
                vendor: {
                    src: ["<%= files.js.vendor %>"],
                    dest: "generated/js/vendor.min.js"
                },
                app: {
                    src: ["<%= files.js.app %>"],
                    dest: "generated/js/app.min.js"
                }
            },
            watch: {
                options: {
                    livereload: true
                },
                html: {
                    files: ["<%= files.html.src %>"],
                    tasks: ["copy:html"]
                },
                css: {
                    files: ["<%= files.css.vendor %>"],
                    tasks: ["less:vendor"]
                },
                js: {
                    files: ["<%= files.js.vendor %>", "<%= files.js.app %>"],
                    tasks: ["concat"]
                },
                coffee: {
                    files: ["coffee/**/*.coffee"],
                    tasks: ["coffee", "concat"]
                },
                less: {
                    files: ["<%= files.less.src %>"],
                    tasks: ["less:dev"]
                }
            },
            less: {
                options: {
                    sourceMap:true,
                    ieCompat: false
                },
                vendor: {
                    src: "<%= files.css.vendor %>",
                    dest: "generated/css/vendor.css"
                },
                dev: {
                    src: "<%= files.less.src %>",
                    dest: "generated/css/style.css"
                },
                dist: {
                    options: {
                        cleancss: true,
                        compress: true
                    },
                    src: ["<%= files.css.vendor %>", "<%= files.less.src %>"],
                    dest: "dist/css/style.css"
                }
            },
            copy: {
                html: {
                    files: {
                        "generated/index.html": "<%= files.html.src %>",
                        "dist/index.html": "<%= files.html.src %>"
                    }
                },
                images: {
                    files: [
                        // makes all src relative to cwd 
                        {expand: true, cwd: 'app/', src: 'img/**', dest: 'generated/'},
                        {expand: true, cwd: 'app/', src: 'img/**', dest: 'dist/'},
                    ]
                },
                fonts: {
                    files: [
                        // makes all src relative to cwd 
                        {expand: true, cwd: 'app/', src: 'fonts/**', dest: 'generated/'},
                        {expand: true, cwd: 'app/font-awesome', src: 'fonts/**', dest: 'generated/'}
                    ]
                }
            },
            server: {
                base: "" + (process.env.SERVER_BASE || 'generated'),
                web: {
                    port: 8000
                }
            },
            open: {
                dev: {
                    path: "http://localhost:<%= server.web.port %>"
                }
            },
            uglify: {
                options: {
                    banner: "<%= banner %>"
                },
                dist: {
                    options: {
                        sourceMap: true,
                        sourceMapIncludeSources: true,
                        sourceMapIn: "<%= concat.app.dest %>.map"
                    },
                    src: "<%= concat.app.dest %>",
                    dest: "dist/js/app.min.js"
                }
            },
            clean: {
                workspaces: ["dist", "generated"]
            }
        });
        grunt.loadTasks("tasks");
        require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);
        grunt.registerTask("default", ["less:vendor", "less:dev", "concat", "copy", "server", "open", "watch"]);
        grunt.registerTask("build", ["clean", "ngtemplates", "less:dist", "coffee", "concat", "uglify", "copy"]);
        return grunt.registerTask("prodsim", ["build", "server", "open", "watch"]);
    };

}).call(this);
