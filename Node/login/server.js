const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const bodyParser = require('body-parser');


const app = express();

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))



let port = process.env.port || 8080;

// declare session;
var session ;

// serving static file
app.use(express.static('public'))

// one day to miliseconds
const oneDay = 1000 * 60 * 60 * 24;

// session middle-ware
app.use(sessions({
    secret: "thisisjustsecretkey",
    saveUninitialized: true,
    cookie: {maxAge: oneDay},
    resave: false
}));

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// cookie parser middleware
app.use(cookieParser());

// setting username and password
// const username = "shine";
// const password = "root";

// home page
app.get('/', (req, res) => {
    session = req.session;
    if(session.userId){
        res.send("Welcome user <a href=\'/logout'>Logout</a>");
    } else {
        res.sendFile('public/index.html', {root: public});
    }
});


app.post('/register', (req, res) => {
    console.log(req.body);
    
});

app.post('/user', (req, res) => {
    if(req.body.username = username && req.body.password == password){
        session = req.session;
        sessionId = req.body.username;
        console.log(session) ;
        res.send("Hello user <a href=\'/logout'>Logout</a>")
    } else {
        res.send("Invalid username or password");
    }
});

app.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});


app.listen(port, err => {
    console.log(`Server is running on port ${port}`);
});