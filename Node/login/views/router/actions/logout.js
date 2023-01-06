const express = require('express');
const router = express.Router();


//logout function on profile page
router.get('/', (req, res) => {
    req.session.name = null;
    req.session.email = null;
    req.session.password = null;
    res.redirect('../'); 
});

module.exports = router;