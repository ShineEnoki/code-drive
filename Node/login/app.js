const express = require('express');
// const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const bodyParser = require('body-parser');

const Mongo = require('./Mongo');


const app = express();

let port = process.env.port || 8080;

// setting ejs folder
app.set('view engine', 'ejs');

// declare session;


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


// Home

app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.post('/', (req, res) => {
    let inputEmail = req.body.email;
    let inputPassword = req.body.password;

    let mongo = new Mongo();
    let query = {
        email: `${inputEmail}`,
        password: `${inputPassword}`
    }
    mongo.collection.findOne(query, (err, data) => {
        if(err) throw err;
        if(data){
     
            req.session.name = data.name;
            req.session.password = data.password;
            res.redirect('http://localhost:8080/profile');
        }
    })
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/register.html')
})

app.post('/register', (req, res) => {
    let db = new Mongo();
    let postData = req.body;
    db.insert(
        postData.name,
        postData.age,
        postData.grade,
        postData.email,
        postData.password
    )

    res.redirect('http://localhost:8080/')
    
});



app.get('/profile', (req, res) => {
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


});


// app.get('/test', (req, res) =>{
//         let db = new Mongo;
//         let query = {email: 'jd@gmail.com', password: 'pwd'};

//         let result = db.collection.findOne(query, (err, result)=>{
//             if(err) throw err;
//             console.log(result)
//         })       
// });

app.listen(port, err => {
    if(err) throw err;
    console.log(`Server is running on port ${port}`);
});
