const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the Mongodb server.');
    }
    console.log('Connected to Mongodb server.');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Sunil'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users')
        .findOneAndDelete({_id: new ObjectId('58759889e884e30fd82f3fed')})
        .then((result) => {
            console.log(result);
        });
    db.close();
});