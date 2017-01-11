const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Error connecting to mongodb:', err);
    }
    console.log('Successfull connected to the database.');

    // db.collection('Todos').find({
    //     _id: new ObjectId('58758ed08afe0cee37f0f4c5')
    // }).toArray().then((docs) => {
    //     console.log('Todos documents:');
    //     console.log(JSON.stringify(docs, undefined, 4));
    // }).catch((err) => {
    //     console.log('Error fetching documents:', err);
    // });

    db.collection('Users')
        .find({location: 'Jersey City'})
        .count()
        .then((count) => {
            console.log(`Found ${count} documents.`)
        }).catch((err) => {
            console.log('Error fetching documents:', err);
        });

    db.close();
});