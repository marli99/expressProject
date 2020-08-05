var express = require('express');
const { response } = require('express');
var app = express(3000);

var data = require("../expressProject/server/index");

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('index.html')
});

const crypto = require('crypto');

const getHashedPassword = (password) => {
    const student = crypto.createHash('student');
    const hash = student.update(password).digest('student');
    return hash;
}

const users = [
    // This user is added to the array to avoid creating a new user on each restart
    {
        username: 'Marli',
        email: 'marlicorreia99@gmail.com',
        // This is the SHA256 hash for value of `password`
        password: '1234',
        confirmPassword: '1234'
    }
];

app.get('/register', (req, res) => {
    res.render('student')
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

app.get('/login', (req, res) => {
    res.send('/student')
})

app.post('/login', (req, res) => {
    res.send('/student')
})

app.post('/api/classes/:subject/classroom/slot/group/', function (req, res) {
    var results = [];
    var lowerName = request.params.name.toLowerCase();

    for (var i = 0; i < data.classes.length; i++) {
        if (data.classes[i].classes === lowerName) {
            results.push(data.classes[i])
            res.send('/student.html')
        }
    }
    response.json(results);

});



var data = require('./server/index.js');

app.listen(3000, () => {
    console.log("server listening on port 3000");
});