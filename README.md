# SpeedRoute
Speedrunning routing web based application

# Setting up the application
The actual application is located inside the 'project' folder. Navigate to it and follow the steps below

1. `npm install` - Install all the dependencies from npm
2. `cp .env.temp .env` - Create environment file and add/modify the following parameters

Parameter | Expecting | Example
--- | --- | ---
NODE_ENV | 'production' or 'development' | 'development'
SERVER_PORT | integer of port to listen on | 3000

3. `npm start` - Start the server

# NPM commands

1. `npm start` - Start the server normally.
2. `npm run nodemon` - Start the server using nodemon (restar server when detecting changes to files).