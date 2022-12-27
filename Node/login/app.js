const express = require('express');
const bodyParser = require('body-parser');

const Mongo = require('./Mongo');
const session = require('express-session');
const { ProfilingLevel } = require('mongodb');

const bcrypt = require('bcrypt');


const app = express();

let port = process.env.port || 8080;

// generating password-encrypt function
const salt = bcrypt.genSaltSync(10);


// setting ejs folder
app.set('view engine', 'ejs');

// one day to miliseconds
const oneDay = 1000 * 60 * 60 * 24;

// session middle-ware
app.use(session({
    secret: "thisisjustsecretkey",
    saveUninitialized: true,
    cookie: {maxAge: oneDay},
    resave: false
}));

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Home page
app.get('/', (req, res) => {
    req.session.loginError = false;
    res.render('index.ejs')
});

app.post('/', (req, res) => {
    let inputEmail = req.body.email;
    let inputPassword = req.body.password;

    let encryptPassword = bcrypt.hashSync(inputPassword, salt);//encrypt user password

    let mongo = new Mongo();

    let query = {
        email: `${inputEmail}`,
        password: `${encryptPassword}`
    }
    //Check if there a user in db or not
    //if there is, redirect to profile
    //if not give error message
    mongo.collection.findOne(query, (err, data) => {
        if(err) throw err;
        if(data){  
            req.session.name = data.name;
            req.session.password = data.password;
            res.redirect('http://localhost:8080/profile');
        } else {
            req.session.loginError = true;
            res.redirect('http://localhost:8080/')
        }
    })
})


// register page
app.get('/register', (req, res) => {
    res.render('register.ejs');
})

app.post('/register', (req, res) => {
    //insert data from user to mongo database
    let db = new Mongo();
    let postData = req.body;
    db.insert(
        postData.name,
        postData.age,
        postData.grade,
        postData.email,
        bcrypt.hashSync(postData.password, salt)//encrypt password
    )

    res.redirect('http://localhost:8080/')
    
});


// profile
app.get('/profile', (req, res) => {
    // if user has already login.This will show his Profile.
    //else if he try to get profile without logining in, this will redirect to home page.
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
        })
    } else {           
        res.redirect('http://localhost:8080'); 
    }
    


});
//


app.listen(port, err => {
    if(err) throw err;
    console.log(`Server is running on port ${port}`);
});
