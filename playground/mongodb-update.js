const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb servers.');
    }

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId('58759864717c240d082ce506')
    }, {
        $set: {
            name: 'Koshy Chacko'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
});