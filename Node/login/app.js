const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const fileUpload = require('express-fileupload');

const path = require('path');


const Mongo = require('./Mongo');


// routers
// main routers
const home =        require('./views/router/home');
const register =    require('./views/router/register');
const profile =     require('./views/router/profile');
const dashboard =   require('./views/router/dashboard');

// actions routers
const role =        require('./views/router/actions/role');
const checkUser =   require('./views/router/actions/checkUser');
const logout =      require('./views/router/actions/logout');
const uploadPhoto = require('./views/router/actions/uploadProfilePhoto');


const app = express();

const port = process.env.port || 8080;

app.use(bodyParser());

app.use(fileUpload());

// setting ejs folder, ejs file must always in views folder.
app.set('view engine', 'ejs');


app.set(path.join(__dirname, 'views'));

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

app.use('/check-user', checkUser); //check-user route

// profile page
app.use('/profile', profile);
    //uploadPhoto route
    app.use('/uploadPhoto', uploadPhoto);

    //logout route
    app.use('/logout', logout);


// admin dashboard
app.use('/dashboard', dashboard);


//role
app.use('/role', role);


app.listen(port, err => {
    if(err) throw err;
    console.log(`Server is running on port ${port}`);
});






  