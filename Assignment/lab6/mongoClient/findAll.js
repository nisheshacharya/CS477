const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://127.0.0.1:27017');

async function main(){
    await client.connect();
    console.log('connect to database succesfully..');
    const db = client.db('bookStore');
    const collection = db.collection('books');
    const result = await collection.find().toArray();
    return result;
}


main()
    .then((data) => {
        console.log(data);
    })
    .catch(console.error)
    .finally(() =>  client.close());