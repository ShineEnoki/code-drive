const {MongoClient} = require('mongodb');

const uri = 'mongodb+srv://MgThuRein:password2025@cluster0.9q9o8k2.mongodb.net/test?authSource=admin&replicaSet=atlas-143641-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';

const client = new MongoClient(uri);

async function run(){
    try{
        const database = client.db('it-school');
        const student = database.collection('student');

        const query = {
            name: 'model3',
        };

        const result = await student.insertOne(query);
        console.log(`${query} is inserted to collection: ${student} of database: ${database} with id: ${result.insertedId}`);

    } finally {
        await client.close();
    }
};

run().catch(console.dir);