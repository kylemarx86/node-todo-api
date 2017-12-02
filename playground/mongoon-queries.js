const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// todo id
// var id = "5a21c973031f549c1f3fe80c";
// user id
var id = "590bad892de2bc9832a8b3ec";        // WORKING USER
// var id = "690bad892de2bc9832a8b3ec";     // USER NOT FOUND
// var id = "690bad892de2bc9832a8b3ec11";   // 

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));



User.findById(id).then((user) => {
    if(!user){
        return console.log('user not found');
    }
    console.log('User: ', JSON.stringify(user, undefined, 2));
}).catch((err) => console.log(err));

// query users by id
// load user model

// find by id

// handle 3 case
// X query works but no user = user not found
// X user found = print
// X errors that may have occured = print