(function() {
    module.exports = function(grunt) {
        grunt.initConfig({
            pkg: grunt.file.readJSON("package.json"),
            banner: "/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - " + "<%= grunt.template.today(\"yyyy-mm-dd\") %>\n" + "<%= pkg.homepage ? \"* \" + pkg.homepage + \"\\n\" : \"\" %>" + "* Copyright (c) <%= grunt.template.today(\"yyyy\") %> <%= pkg.author.name %>;" + " Licensed <%= _.pluck(pkg.licenses, \"type\").join(\", \") %> */\n",
            files: {
                html: {
                    src: "app/index.html"
                },
                less: {
                    src: ["app/less/variables.less", "app/less/mixins.less", "app/less/agency.less"]
                },
                js: {
                    vendor: ["bower_modules/jquery/jquery.js", "bower_modules/angular/angular.js", "bower_modules/angular-route/angular-route.js", "bower_modules/underscore/underscore.js", "bower_modules/extend.js/index.js", "bower_modules/base64/base64.js"]
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
                app: {
                    src: ["<%= files.js.vendor %>", "<%= files.coffee.compiled %>", "<%= files.templates.compiled %>"],
                    dest: "generated/js/app.min.js"
                }
            },
            watch: {
                options: {
                    livereload: true
                },
                html: {
                    files: ["<%= files.html.src %>"],
                    tasks: ["copy"]
                },
                js: {
                    files: ["<%= files.js.vendor %>"],
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
                    ieCompat: false
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
                    src: "<%= files.less.src %>",
                    dest: "dist/css/style.css"
                }
            },
            copy: {
                html: {
                    files: {
                        "generated/index.html": "<%= files.html.src %>",
                        "dist/index.html": "<%= files.html.src %>"
                    }
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
        grunt.registerTask("default", ["less:dev", "concat", "copy", "server", "open", "watch"]);
        grunt.registerTask("build", ["clean", "ngtemplates", "less:dist", "coffee", "concat", "uglify", "copy"]);
        return grunt.registerTask("prodsim", ["build", "server", "open", "watch"]);
    };

}).call(this);
