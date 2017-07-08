/**
 * Responsible for setting up all the routes and configurations for the api
 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('api routes here');
});

module.exports = router;