const express = require('express');
const router = express.Router();
const Mongo = require('../Mongo');


router.get('/',  (req, res) => {
    if(req.session.name){
        console.log('session data is still on the requested device')
    }
    let error = req.query.error;
    if(!error){
        error = false;
    } else {
        error = true;
    }
    res.render('index.ejs', {err: `${error}`})
});

router.post('/', (req, res) => {
    let inputEmail = req.body.email;
    let inputPassword = req.body.password;
    res.redirect(`/check-user?email=${inputEmail}&password=${inputPassword}`);
});


// check if there user with the data given from home page
router.get('/check-user', (req, res) => {
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
            res.redirect('/profile');
        }
        else {
            res.redirect('/?error=true')
        }
    })

});
//end of home page

module.exports = router;