var express = require('express');
const { response } = require('express');
var app = express(3000);
var logger = require('./logger')
var data = require('./server/index');

var urlpath = path.join(__dirname, '../frontend/build/')

app.use(logger)
app.use(express.static(urlpath))
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('index.html')
});

app.param('name', function (request, response, next) {
    request.lowerName = request.params.name.toLowerCase();
    next();
});


app.get('/api/classes/:/name/subject/', function (req, res) {
    var results = [];
    var lowerName = request.params.name.toLowerCase();

    for (var i = 0; i < data.subject.length; i++) {
        if (data.subject[i].classes === lowerName) {
            results.push(data.classes[i])
        }
    }
    response.json(results);

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

app.get('/login', (req, res) => {
    res.send('/student')
})

app.post('/login', (req, res) => {
    res.send('/student')
})



app.listen(3000, () => {
    console.log("server listening on port 3000");
});