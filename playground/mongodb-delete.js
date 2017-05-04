// const MongoClient = require('mongodb').MongoClient;
//destructuring of mongodb object
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Users').find({name: 'Kyle'}).toArray().then((docs) => {
    //     console.log('Users');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('There was an error reading Users', err)
    // });

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // deleteMany
    db.collection('Users').deleteMany({name: 'Kyle'}).then((res) => {
        // console.log('number deleted: ', res.CommandResult.result.n);
        console.log(res);
    });

    // findOneAndDelete
    // db.collection('Users').findOneAndDelete({_id: ObjectID('590a9a0e96ee582f78ad6e0f')}).then((result) => {
    //     console.log(result);
    // });

    // db.close();
});