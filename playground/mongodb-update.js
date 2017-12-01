// const MongoClient = require('mongodb').MongoClient;
//destructuring of mongodb object
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // // findOneAndUpdate on Todos
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('590ac78f68cc3d1f9726d7be')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // });

    // // findOneAndUpdate on Users
    // db.collection('Users').findOneAndUpdate({
    //     _id: 123
    // }, {
    //     $set: {
    //         name: 'Gary',
    //         location: 'Davis'
    //     },
    //     $inc: {
    //         age: 33
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // })


    db.collection('Users').findOneAndUpdate({
        name: 'John'
    }, {
        $set: {
            location: 'Garden Grove'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    })


    // db.close();
});