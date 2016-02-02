# Install NodeJS	

- Download nodejs msi from: https://nodejs.org/en/
- Install the nodejs msi

- Note: If you get the following message: 'node' is not recognized as an internal or external command, operable program or batch file complete the following.

- 1. Open the Control Panel (Click the Start button, then click Control Panel)
- 2. Click User Accounts
- 3. Click Change my environment variables
- 4. Select PATH and click the Edit... button
- 5. At the end of the Variable value, add ;C:\Program Files\nodejs
- 6. Click Ok on the "Edit User Variable" window, then click Ok on the "Environment Variables" window
- 7. Start a command prompt window (Start button, then type cmd into the search and hit enter)
- 8. At the prompt (C:\>) type npm and hit enter; you should now see some help text (Usage: npm <command> etc.) rather than "npm is not recognized..."


# Install CoffeeScript	
- npm install -g coffee-script

# Install Grunt the JavaScript Task Runner

- pre-existing static assets. Create package.json file for npm. Create Gruntfile.js
- npm init
- touch Gruntfile.js

- Install grunt-cli globally 
- npm install grunt-cli -g
- npm install grunt
- npm install grunt-contrib-concat --save