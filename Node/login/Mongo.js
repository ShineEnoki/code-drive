const {MongoClient} = require('mongodb');



class Mongo{

    // url of your mongodb
    uri = 'mongodb+srv://MgThuRein:password2025@cluster0.9q9o8k2.mongodb.net/test?authSource=admin&replicaSet=atlas-143641-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';

    client = new MongoClient(this.uri);

    database = this.client.db('it-school');
    collection = this.database.collection('student');

    insert(name, age, grade, email, password){
        try{
            let query = {
                    name: `${name}`,
                    age: `${age}`,
                    grade: `${grade}`,
                    email: `${email}`,
                    password: `${password}`
            };

            this.collection.insertOne(query, (err) => {
                if(err) throw err;
                let id = query._id;
                let data = JSON.stringify(query);
                console.log(`${data} is inserted with id: ${id}`);
            });
    
            
        } finally{
            this.client.close();
        }
        
    }
    
}

// let Mg = new Mongo();

// Mg.insert('akty', 16, 11);