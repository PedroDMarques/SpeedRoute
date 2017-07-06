const express = require('express');

module.exports = function(){
	const app = express();

	app.get('/', (req, res) => {
		console.log("Server sent hello world");
		res.send("hello world");
	});

	return app;
}