const express = require('express');
const router = express.Router();

router.get('/Admin', (req, res) => {
	res.send('Admins');
});

module.exports = router;
