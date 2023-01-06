const express = require('express');
const router = express.Router();
const Mongo = require('../../Mongo');




router.get('/', (req, res) => {
    res.render('ejs/register.ejs');
})

router.post('/', (req, res) => {
    //insert data from user to mongo database
    let db = new Mongo();
    let postData = req.body;
    let query = {
        name: `${postData.name}`,
        age: `${postData.age}`,
        email: `${postData.email}`,
        password: `${postData.password}`,
        role: 'student',
        photo: false,
    }
    db.collection.insertOne(query, (err, data) => {
        if(err) throw err;
        console.log(`${query._id} is inserted with role: student`);
    })

    res.redirect('../')
    
});

module.exports = router;