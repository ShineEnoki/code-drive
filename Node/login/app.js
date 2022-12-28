const express = require('express');
const bodyParser = require('body-parser');

const Mongo = require('./Mongo');
const session = require('express-session');


const app = express();

let port = process.env.port || 8080;


// setting ejs folder, ejs file must always in views folder.
app.set('view engine', 'ejs');

// milisecond to one day
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
    let error = req.query.error;
    if(!error){
        error = false;
    } else {
        error = true;
    }
    res.render('index.ejs', {err: `${error}`})
});

app.post('/', (req, res) => {
    let inputEmail = req.body.email;
    let inputPassword = req.body.password;
    res.redirect(`http://localhost:8080/check-user?email=${inputEmail}&password=${inputPassword}`);
});


// check if there user with the data given from home page
app.get('/check-user', (req, res) => {
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
            res.redirect('http://localhost:8080/profile');
        }
        else {
            res.redirect('http://localhost:8080/?error=true')
        }
    })

});
//end of home page



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
        postData.email,
        postData.password
    )

    res.redirect('http://localhost:8080/')
    
});
// end of register page


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

//logout function on profile page
app.get('/logout', (req, res) => {
    res.redirect('http://localhost:8080'); 
});
// end of profile section

app.listen(port, err => {
    if(err) throw err;
    console.log(`Server is running on port ${port}`);
});
