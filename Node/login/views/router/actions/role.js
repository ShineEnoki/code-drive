const express = require('express');
const router = express.Router();
const Mongo = require('../../../Mongo');


router.get('/', (req, res) => {
    // email and  role value will get from dashboard query
    let email = req.query.email;
    let role = req.query.role;

    let query = {
        email: `${email}`
    }
    let newValue = {
        $set: {
            role: `${role}`
        }
    }

    let db = new Mongo();
    db.collection.updateOne(query, newValue, (err,data) => {
        if(err) throw err;
        else {
            res.redirect('../dashboard');
        }
    })
})


module.exports = router;