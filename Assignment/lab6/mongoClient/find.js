const {MongoClient} = require('mongodb');

const client = new MongoClient('mongodb://127.0.0.1:27017');

async function main(){

    await client.connect();

    const db = client.db('bookStore');
    const collection = db.collection('books');

    const result = collection.findOne({id:1});
    return result; 
}

main()
.then((data) =>{
    console.log(data)})
.catch(err => {console.error(err)})
.finally(()=> client.close());