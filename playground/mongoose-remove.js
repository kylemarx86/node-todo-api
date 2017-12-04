const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//     console.log(res);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findByIdAndRemove('5a24fd39ebdb1a498f4fe61a').then((todo) => {
    console.log(todo);
});

// Todo.findOneAndRemove({_id: ''}).then((todo) => {
//     console.log(todo);
// });