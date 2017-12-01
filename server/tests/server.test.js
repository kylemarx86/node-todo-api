const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
    text: 'first test todo'
}, {
    text: 'second test todo'
}];

// clears out todos before running because checking the length below depends on it
beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
});

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = 'Test todo text';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if(err){
                    return done(err);
                }

                Todo.find({text}).then((todos) => {
                    // expect to be 1, because only one was added (with assumption db is empty. see beforeEach above)
                    expect(todos.length).toBe(1);
                    // check the text of the todos
                    expect(todos[0].text).toBe(text);
                    done();
                    // catch used to catch any errors in the above two expectations
                    // statement syntax as opposed to arrow function expression syntax
                }).catch((e) => done(e));
            });
    });

    it('should not create todo with invalid body data', (done) => {
        // send an empty object
        
        request(app)
            .post('/todos')
            .send({})
            // expect a 400 back
            .expect(400)
            .end((err, res) => {
                if(err){
                    return done(err);
                }

                Todo.find().then((todos) => {
                    // length of todos should be 2
                    expect(todos.length).toBe(2);
                    done();
                }).catch((e) => done(e));
            });
        
    });
});

describe('GET /todos', () => {
    it('should get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
    });
});