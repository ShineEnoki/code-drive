const express = require('express');
const router = express.Router();
const Mongo = require('../../Mongo');


router.get('/',  (req, res) => {
    if(req.session.name){
        res.redirect(`../check-user?email=${req.session.email}&password=${req.session.password}`);
    }

    //if get error from (check-uer) route
    //this will re render index.js file with error json
    let error = req.query.error;
    if(!error){
        error = false;
    } else {
        error = true;
    }
    res.render('ejs/index.ejs', {err: `${error}`})
});

router.post('/', (req, res) => {
    let inputEmail = req.body.email;
    let inputPassword = req.body.password;
    res.redirect(`../check-user?email=${inputEmail}&password=${inputPassword}`);
});


//end of home page

module.exports = router;