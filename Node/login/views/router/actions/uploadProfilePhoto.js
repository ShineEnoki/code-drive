const express = require('express');
const router = express.Router();
const Mongo = require('../../../Mongo');
const root = require('rootrequire');


router.post('/', (req, res) => {
    // move phto to disire folder
    let {image} = req.files;
    image.mv(root + '/views/photo/' + `${req.session.name}` +".jpg");
    
    // adding photo status to database
    let db = new Mongo();
    let query = {
        name: `${req.session.name}`,
        password: `${req.session.password}`
    };

    let newValue = { 
        $set : {
            photo: true
        }
    };

    db.collection.updateOne(query, newValue, (err,user) => {
        if(err) throw err;
    });

    res.redirect('../profile');

});

module.exports = router;