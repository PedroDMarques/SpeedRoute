/**
 * Responsible for setting up all the routes and configurations for the user pages
 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('user routes here');
});

module.exports = router;