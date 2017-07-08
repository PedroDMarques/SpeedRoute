# SpeedRoute
Speedrunning routing web based application

# Setting up the application
The actual application is located inside the 'project' folder. Navigate to it and follow the steps below

1. `npm install` - Install all the dependencies from npm.
2. `cp .env.temp .env` - Create environment file and add/modify the following parameters:

Parameter | Description | Expecting | Example | Required
--- | --- | --- | --- | ---
NODE_ENV | The process environment for the server | 'production' or 'development' | 'development' | no
SERVER_PORT | The port the server should listen on | integer | 3000 | yes
LOG_LEVEL | The minimum level of logging that should be done | 'error', 'warn', 'info', 'verbose', 'debug' or 'silly' | 'info' | no

3. `npm run webpack` - Compile all of the javascript files.
4. `npm start` - Start the server.

# NPM commands

1. `npm start` - Start the server normally.
2. `npm run nodemon` - Start the server using nodemon (restar server when detecting changes to files).
3. `npm run webpack` - Compile all of the necessary javascript files.
4. `npm run webpack-watch` - Same as above but watch for changes in the files and compile them as needed.