const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

let db;
async function createDB(callback){
    try{
        await client.connect();
        db = client.db("bookStore");
        callback();
    }catch(err){
        console.error(err);
    }
    
}

function getDB(){
    if(db){
        return db;
    } else {
        throw new Error('No Database');
    }
}

exports.createDB = createDB;
exports.getDB = getDB;