module.exports = function(grunt) {
  var express = require("express");
  var compress = require("compression");
  var errorHandler = require("errorhandler");
  grunt.registerTask("server", "static file development server", function() {
    var app, webPort, webRoot;
    webPort = grunt.config.get("server.web.port") || 8000;
    webRoot = grunt.config.get("server.base") || "dist";

    app = express();
    app.use(compress());
    app.use(express.static("" + (process.cwd()) + "/" + webRoot));
    app.use(errorHandler());
    app.listen(webPort);

    grunt.log.writeln("Starting express web server in \"" + webRoot + "\" on port " + webPort);

    return app;
  });
};