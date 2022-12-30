const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');


const Mongo = require('./Mongo');

//to handle post file data
const fs = require('fs');
const formidable = require('formidable');
const fse = require('fs-extra');

// routers
const home = require('./router/home');
const register = require('./router/register');
const profile = require('./router/profile');
const logout = require('./router/logout');


const app = express();

const port = process.env.port || 8080;


// setting ejs folder, ejs file must always in views folder.
app.set('view engine', 'ejs');

// milisecond to one day
const oneMonth = 1000 * 60 * 60 * 24 * 30;

// session middle-ware
app.use(session({
    secret: "thisisjustsecretkey",
    saveUninitialized: true,
    cookie: {maxAge: oneMonth},
    resave: false
}));

app.use( express.static( "views" ) );

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Home page
app.use('/', home);


// register page
app.use('/register', register);


// profile
app.use('/profile', profile);

//logout
app.use('/logout', logout);


app.listen(port, err => {
    if(err) throw err;
    console.log(`Server is running on port ${port}`);
});






  