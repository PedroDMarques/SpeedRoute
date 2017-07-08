/**
 * Responsible for setting up all the routes and configurations for the route view page
 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('route viewing routes here');
});

module.exports = router;