const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is the login page for Rent Bazaar portal');
});

module.exports = router;