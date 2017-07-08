/**
 * Responsible for setting up all the routes and configurations for the blog
 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('blog routes here');
});

module.exports = router;