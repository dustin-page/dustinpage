# GLOBAL INSTALLATION OF NODEJS, GIT, GRUNT AND COFFEE SCRIPT

- These steps are completed for every web application.

# Install NodeJS	

- Download nodejs msi from: https://nodejs.org/en/
- Install the NODE MSI Example: "node-v4.2.6-x86.msi" 
- Restart the OS (Important! Node JS will not work correctly or be available globally in command prompt until the OS is restarted)

## Troubleshooting


### MSI Doesn't Install Issue

- If it doesn't install automatically, right click on the MSI file, go to Properties, under Security click Unblock.


### Path Variable Issue
- If you get the following message: 'node' is not recognized as an internal or external command, operable program or batch file complete the following.

- 1. Open the Control Panel (Click the Start button, then click Control Panel)
- 2. Click User Accounts
- 3. Click Change my environment variables
- 4. Select PATH and click the Edit... button
- 5. At the end of the Variable value, add ;C:\Program Files\nodejs
- 6. Click Ok on the "Edit User Variable" window, then click Ok on the "Environment Variables" window
- 7. Start a command prompt window (Start button, then type cmd into the search and hit enter)
- 8. At the prompt (C:\>) type npm and hit enter; you should now see some help text (Usage: npm <command> etc.) rather than "npm is not recognized..."

# Install Git (or Bitbucket)

- Download Git from: https://git-scm.com/downloads
- Install the Git Executable Example: "Git-2.7.0-32-bit.exe"

Note: If you would like to use SSH so you don't have to keep typing in your password you will have to set up an SSH key and passphrase in your GitHub settings.

# Install CoffeeScript Globally (If you are writing in Coffee Script)	
- npm install -g coffee-script


# SETTING UP WEB APP (BUILD PROCESSES AND WORKFLOWS FOR NODEJS, GRUNT AND BOWER)

- These steps are completed for every web application.

- Note: Use Git Bash to run commands like "touch, mkdir". They can't be ran from a Windows command prompt.

- Note: You can also use these steps to setup a workflow for pre-existing files or for a completely new web application

- Note: An alternative is to have the NPM packages predefined in an package.json file so you can simply run:
npm install

# Node: Create a package.json file

- This manages npm packages for the web application.
- npm init
- Walk through the steps to generate the package.json file

- Documentation: https://leanpub.com/npm/read

# Grunt the JavaScript Task Runner

- touch Gruntfile.js

- Note: touch needs to be ran from Git Bash in order to create a file.

- Install Grunt's command line interface (CLI) globally
- npm install grunt-cli -g
- npm install grunt

# Use grunt-contrib-concat to combine JS files

- npm install grunt-contrib-concat --save

# grunt-contrib-watch 
- Use to watch for file changes and run tasks.
- Note: When options are configured correctly this can be used with LiveReload Chrome add-in to auto refresh web application in browser.

- npm install grunt-contrib-watch  --save

## Live-Reload Extension

- Open Google Chrome and install the chrome live-reload extension
-- https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en

# LESS Stylesheet Preprocessor

- npm install grunt-contrib-less --save

# grunt-contrib-copy 

- Use to copy files to different directories in order to run tasks on them and build dists.

- npm install grunt-contrib-copy --save

# Install Express Web Server 
- Use express to run a local web server in the development environment

- npm install express --save-dev

## Create a folder and JS file to store a custom task for running the Express server

- mkdir tasks
- touch tasks/server.js

# Thinking about Dependency Management


## Clean "Generated" and "Dist" Folder

- npm install grunt-contrib-clean --save

## Minify (Uglify) the JS Code

- npm install grunt-contrib-uglify --save

## Open Website in Browser (Automatically)

- npm install grunt-open --save-dev

## CoffeeScript (Optional: Only needed if writing CoffeeScript)

- npm install grunt-contrib-coffee --save

# Bower

- npm install -g bower
- touch .bowerrc
- bower init
- bower install angular#1.2.0-rc.3 --save
- bower install angular-route#1.2.0-rc.3 --save
- bower install base64js --save
- bower install jquery --save
- bower install underscore --save
- bower install https://github.com/searls/extend.js/releases/download/0.1.0/extend.js --save










# Precompiling Templates for MV*

## grunt-angular-templates

- npm install grunt-angular-templates --save

# Optimizing for Developer Happiness

## grunt-concat-sourcemap

- npm install grunt-concat-sourcemap --save










# Alternative Frameworks & Dependency Management Strategies

## Backbone, precompiling handlebars

- npm install grunt-contrib-handlebars --save

- rm -rf bower_modules
- bower install https://raw.github.com/testdouble/backbone-fixins/master/dist/backbone-fixins.js --save
- bower install backbone.stickit#0.6.2 --save
- bower install backbone#0.9.10 --save
- bower install underscore.string#2.3.0 --save
- bower install handlebars#1.0.0 --save
- bower install underscore#1.4.3 --save
- bower install jquery#1.8.2 --save
- bower install https://github.com/searls/extend.js/releases/download/0.1.0/extend.js --save
- bower install base64js --save

## CommonJS, A simple module format

- npm install grunt-browserify --save
- npm install coffeeify --save

## Yeoman

- cd yeoman-workflow
- npm install
- bower install
- grunt server

## Lineman

- cd lineman-workflow
- npm installl
- lineman

## Bonus: Grunt Contrib Imagemin

- cd grunt-workflow
- npm install grunt-contrib-imagemin --save
- grunt imagemin
