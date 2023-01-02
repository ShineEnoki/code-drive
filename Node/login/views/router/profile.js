const express = require('express');
let app = express();
const router = express.Router();
const Mongo = require('../../Mongo');


const formidable = require('formidable');

const fse = require('fs-extra');

router.get('/', (req, res) => {
    // if user has already login.This will show his Profile.   
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
            res.render('ejs/profile.ejs', user);
        });
    } //else if he try to get profile without logining in, he will redirected to home page.
    else {           
        res.redirect('../'); 
    }
});

router.post('/', (req, res) => {
    //handling form data 
    //this post mehtod expected to get post only photo 
    let form = new formidable.IncomingForm();

    //parsing form data
    form.parse(req, (err, fields, files) =>{
        //adding photo status to database
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
        })
        //copy photo from temp folder to root:views/router/photo/ with jpg formet
        let name = req.session.name;

        let oldPath = files.jpg.filepath;
        let newPath = __dirname + `\\photo\\${name}.jpg`

        fse.copy(oldPath, newPath, err=> {
            if(err) throw err;
        });
    });
    

});



module.exports = router;