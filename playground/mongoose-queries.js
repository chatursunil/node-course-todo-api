const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '587d0ee548da0a53e0d61fd9';

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos:', todos);
// });

// Todo.findOne({
//     completed: false
// }).then((todo) => {
//     console.log('Todo:', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not valid.');
//     }
//     console.log('Todo By ID:', todo);
// });

let id = '587ce20634c7063e40eb7811';

if (!ObjectId.isValid(id)) {
    console.log('ID is not valid');
}

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found.');
    }
    console.log('User by ID:', user);
}).catch((e) => {
    console.log(e);
});