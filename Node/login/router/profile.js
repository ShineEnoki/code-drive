const express = require('express');
const router = express.Router();
const Mongo = require('../Mongo');

const formidable = require('formidable');
const fse = require('fs-extra');

router.get('/', (req, res) => {
    // if user has already login.This will show his Profile.
    //else if he try to get profile without logining in, he will redirected to home page.
    if(req.session.name){
        let userName = req.session.name;
        let userPassword = req.session.password;
        let db = new Mongo();
        let query = {
            name : `${userName}`, 
            password: `${userPassword}`
        };

        db.collection.findOne(query, (err, user) =>{
            if(err) throw err;
            res.render('profile.ejs', user);
        });
    } else {           
        res.redirect('../'); 
    }
});

router.post('/', (req, res) => {
    let form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) =>{
        let name = req.session.name;
        console.log(name)
        let oldPath = files.jpg.filepath;
        let newPath = __dirname + `\\views\\photo\\${name}.jpg`
        fse.copy(oldPath, newPath, err=> {
            if(err) throw err;
            console.log('1 photo is inserted')
        });
    });
    

});



module.exports = router;