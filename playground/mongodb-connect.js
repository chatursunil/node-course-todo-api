// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');
// let obj = ObjectId();
// console.log(obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Successfully connected to MongoDB server.');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, res) => {
    //     if (err) {
    //         return console.log(`Error inserting document to 'Todos' collection: ${err}`);
    //     }
    //     console.log('Added the following document(s):\n', JSON.stringify(res.ops, undefined, 4));
    // });

    db.collection('Users').insertOne({
        name: 'Koshy Chacko',
        age: 46,
        location: 'Chicago'
    }, (err, res) => {
        if (err) {
            return console.log(`Error inserting document to 'Users' collection: ${err}`);
        }
        console.log(JSON.stringify(res.ops, undefined, 2));
    });

    db.close();
});