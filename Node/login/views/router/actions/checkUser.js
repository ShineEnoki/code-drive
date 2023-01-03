const express = require('express');
const router = express.Router();
const Mongo = require('../../../Mongo');

router.get('/', (req, res) =>{
    let inputEmail = req.query.email;
    let inputPassword = req.query.password;

    let mongo = new Mongo();

    let query = {
        email: `${inputEmail}`,
        password: `${inputPassword}`
    }

    //Check if there a user in db or not
    //if there is, redirect to profile
    //if not give error message and redirect to login page
    mongo.collection.findOne(query, (err, data) => {
        if(err) throw err;
        if(data){  
            req.session.email = data.email;
            req.session.password = data.password;
            req.session.name = data.name;
            req.session.role = data.role;
            res.redirect(`../profile`);
        }
        else {
            res.redirect('/?error=true')
        }
    })
})

module.exports = router;