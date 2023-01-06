const express = require('express');
let app = express();
const router = express.Router();


const Mongo = require('../../Mongo');



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


// this post mehtod expected to get post only photo 
// router.post('/', (req, res) => {
//     // move phto to disire folder
//     let {image} = req.files;
//     image.mv(__dirname + '/photo/' + req.session.name + '.jpg');
    
//     //adding photo status to database
//     let db = new Mongo();
//     let query = {
//         name: `${req.session.name}`,
//         password: `${req.session.password}`
//     };

//     let newValue = { 
//         $set : {
//             photo: true
//         }
//     };

//     db.collection.updateOne(query, newValue, (err,user) => {
//         if(err) throw err;
//     });

// });



module.exports = router;