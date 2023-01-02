const express = require('express');
const router = express.Router();
const Mongo = require('../../Mongo');

router.get('/', (req, res) => {
    if(req.session.role != 'admin') {
        res.redirect('../')
    }
    // collect all user data from database
    let db = new Mongo();
    db.collection.find({}).toArray((err, data) => {
        if(err) throw err;
        else res.render('ejs/dashboard', {data})
    })
    
})

module.exports = router;