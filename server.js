var express = require('express');
// var session = require('express-session');
// var bodyParser = require('body-parser');
// var path = require('path');
const { response } = require('express');
var app = express(3000);
var data = require('./server/index');


app.use(express.static('public'));

app.get('./public/index.html', function (req, res) {
    res.send()
});

app.param('name', function (request, response, next) {
    request.lowerName = request.params.name.toLowerCase();
    next();
});


app.get('/api/classes', function (request, response) {
    if (request.query.limit >= 0) {
        response.json(data.classes.slice(0, request.query.limit));
    } else {

        response.json(data.classes);
    }

});

app.get('/api/teachers/:classes/subject', function (request, response) {
    if (request.query.limit >= 0) {
        response.json(data.teachers.classes.slice(0, request.query.limit));
    } else {

        response.json(data.teachers.classes);
    }

});

app.get('/api/classes/:/slot/teacher/student', function (req, res) {
    var results = [];
    var lowerName = request.params.slot.toLowerCase();

    for (var i = 0; i < data.teachers.student.length; i++) {
        if (data.slot[i].classes === lowerName) {
            results.push(data.classes[i])
        }
    }
    response.json(results);

});


const crypto = require('crypto');

const getHashedPassword = (password) => {
    const student = crypto.createHash('student');
    const hash = student.update(password).digest('student');
    return hash;
}

const users = [

    {
        username: 'Marli',
        email: 'marlicorreia99@gmail.com',

        password: '1234',
        confirmPassword: '1234'
    }
];

app.get('/register', (req, res) => {
    res.send('/student.html')
})

app.post('/register', (req, res) => {
    const { username, password, confirmPassword, email } = req.body;

    if (password === confirmPassword) {
        if (users.find(user => user.email === email)) {
            res.render('register', {
                message: 'user already registered',
                messageClass: 'alert-danger'
            });

            return;
        }

        const hashedPassword = getHashedPassword(password);

        users.push({
            username,
            email,
            password: getHashedPassword
        });

        res.render('/login', {
            message: 'Registration Complete',
            messageClass: 'alert-success'
        });
    } else {
        res.render('register', {
            message: 'Password does not match',
            messageClass: 'alert-danger'
        })
    }
});

app.get('/login', function (req, res) {
    res.send('./public/student.html')
})

app.post('/login', function (req, res) {
    res.send('./public/student.html')
})



app.listen(3000, () => {
    console.log("server listening on port 3000");
});