//libraries
var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
//local
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        // status 400 for bad request / most likely request didn't fit model
        res.status(400).send(err);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(err);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    // validate id using isvalid 
        // respond with 404 and send empty body
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    // findbyid
    Todo.findById(id).then((todo) => {
        // success - 
        // if todo 200 and send back
        // if no todo send back 404 and send empty body
        if(!todo){
            return res.status(404).send();
        }
        res.status(200).send({todo});
    }).catch((err) => res.status(400).send());
    // error -- send back 400 send back nothing
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};