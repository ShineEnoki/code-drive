const Mongo = require('./Mongo');

let db = new Mongo();

function insertStudent(name, age){
    let query = {
        name: `${name}`,
        age: `${age}`,
        email: `${name}@gmail.com`,
        password: `password`,
        role: 'student',
        photo: false,
    }

    db.collection.insertOne(query, (err, data) => {
        if(err) throw err;
        else console.log(`${name} is inserted as student`);
    })
}

function insertTeacher(name, age){
    let query = {
        name: `${name}`,
        age: `${age}`,
        email: `${name}@gmail.com`,
        password: `password`,
        role: 'teacher',
        photo: false,
    }

    db.collection.insertOne(query, (err, data) => {
        if(err) throw err;
        else console.log(`${name} is inserted as teacher`);
    })
}

function insertAdmin(name, age){
    let query = {
        name: `${name}`,
        age: `${age}`,
        email: `${name}@gmail.com`,
        password: `password`,
        role: 'admin',
        photo: false,
    }

    db.collection.insertOne(query, (err, data) => {
        if(err) throw err;
        else console.log(`${name} is inserted as admin`);
    })
}

insertAdmin('admin', 18);

insertTeacher('JiraiyaOgata', 60);
insertTeacher('Tsunade', 60);
insertTeacher('Oruchimaru', 60);
insertTeacher('UchihaMadara', 99);

insertStudent('UzumakiNaruto', 20);
insertStudent('UchihaSasuke', 20);
insertStudent('Sakura', 20);
insertStudent('UchihaObito', 30);
insertStudent('MinatoNikaze', 40);
insertStudent('KakashiHatake', 30);
insertStudent('Rinn', 30);