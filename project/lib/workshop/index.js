/**
 * Responsible for setting up all the routes and configurations for the route workshop
 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('workshop routes here');
});

module.exports = router;