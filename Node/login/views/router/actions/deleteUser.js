const express = require('express');
const router = express.Router();
const Mongo = require('../../../Mongo');


//this route will delete user account
//only role: admin can do this
router.get('/', (req, res) => {
    //email and photoStatus value will get from query directed by dashboard page
    let email = req.query.email;


    // deleting user data from database
    let db = new Mongo();
    let query = {
        email: `${email}`
    };

    db.collection.deleteOne(query, (err) => {
        if(err) throw err;
        res.redirect('../dashboard');
        
    })


})

module.exports = router;