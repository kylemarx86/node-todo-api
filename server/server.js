//libraries
var express = require('express');
var bodyParser = require('body-parser');

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

app.listen(3000, () => {
    console.log('Started on port 3000');
})