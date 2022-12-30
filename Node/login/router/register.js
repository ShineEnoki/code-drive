const express = require('express');
const router = express.Router();
const Mongo = require('../Mongo');



router.get('/', (req, res) => {
    res.render('register.ejs');
})

router.post('/', (req, res) => {
    //insert data from user to mongo database
    let db = new Mongo();
    let postData = req.body;
    db.insert(
        postData.name,
        postData.age,
        postData.email,
        postData.password
    )

    res.redirect('../')
    
});

module.exports = router;