var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({ "origin": "http://localhost:8000" }));

var logger = require('./logger');
app.use(logger);

var data = require("./data.js");

app.use(express.static('public'));

app.get('/', function (request, response) {
    response.sendFile(_dirname + '/public/index.html');
});

app.get('/', function (request, response) {
    response.sendFile(_dirname + '/public/student.html');
});


app.get('/home', function (request, response) {
    response.redirect(301, '/');
});

app.param('name', function (request, response, next) {
    request.lowerName = request.params.name.toLowerCase();
    next();
});

app.post('/api/classes', function (request, response) {
    var id = data.classes.length + 1;
    var subject = request.query.subject;
    var slot = request.query.slot;
    var group = request.query.group;
    var classroom = request.query.classroom;
    var googleMeet = request.query.googleMeet;

    if (subject != "" && slot != "" && group != "" && classroom != "") {
        data.classes.push({ id: id, subject: subject, slot: slot, group: group, classroom: classroom, googleMeet: googleMeet });
        response.json("new classses added with ID: " + id);
    } else {
        response.status(406).json("Error while posting classes");
    }
});

app.get('/api/classes', function (request, response) {
    if (request.query.limit >= 0) {
        response.json(data.classes.slice(0, request.query.limit));
    } else {
        response.json(data.classes);
    }
});

app.put('/api/classes/:id', function (request, response) {
    var id = request.params.id;
    var subject = request.query.subject;
    var slot = request.query.slot;
    var group = request.query.group;
    var classroom = request.query.classroom;
    var googleMeet = request.query.googleMeet;

    var classIndex = null;

    for (var i = 0; i < data.classes.length; i++) {
        if (data.classes[i].id === parseInt(id)) {
            classIndex = i;
        }
    }

    if (classIndex == null) {
        response.status(404).json("No class with ID " + id + " found");
    }
    else {
        if (subject != "") {
            data.classes[classIndex].subject = subject;
        }

        if (slot != "") {
            data.classes[classIndex].slot = slot;
        }

        if (group != "") {
            data.classes[classIndex].group = group;
        }

        if (classroom != "") {
            data.classes[classIndex].classroom = classroom;
        }
        if (googleMeet != "") {
            data.classes[classIndex].googleMeet = googleMeet;
        }

        response.json("Class with id " + id + " updated.");
    }
});

app.delete('/api/classes/:id', function (request, response) {
    var id = request.params.id;
    var classIndex = null;

    for (var i = 0; i < data.classes.length; i++) {
        if (data.classes[i].id === parseInt(id)) {
            classIndex = i
        }
    }

    if (classIndex == null)
        response.status(404).json("No exercise with if " + id + " found");
    else {
        data.classes.splice(classIndex, 1);
        response.json("Classes with id " + id + " delete.")
    }
});

app.get('/api/learners', function (request, response) {
    if (request.query.limit >= 0) {
        response.json(data.learners.slice(0, request.query.limit));
    } else {
        response.json(data.learners);
    }
});


app.get('/api/teachers', function (request, response) {
    if (request.query.limit >= 0) {
        response.json(data.teachers.slice(0, request.query.limit));
    } else {
        response.json(data.teachers);
    }
});

app.get('/api/teachers/:id', function (request, response) {
    var id = request.params.id;
    var teacher = null;

    for (var i = 0; i < data.teachers.length; i++) {
        if (data.teachers[i].id === parseInt(id)) {
            teacher = data.teachers[i];
            response.json(teacher);
        }
    }
    if (teacher == null) {
        response.status(404).json("No teacher with id " + id + " found");
    }
});

app.put('/api/teachers/:id', function (request, response) {
    var id = request.params.id;
    var name = request.query.name;
    var email = request.query.email;
    var classes = request.query.classes;

    var classIndex = null;

    for (var i = 0; i < data.teachers.length; i++) {
        if (data.teachers[i].id === parseInt(id)) {
            classIndex = i;
        }
    }

    if (classIndex == null) {
        response.status(404).json("No class with ID " + id + " found");
    }
    else {
        if (name != "") {
            data.teachers[classIndex].name = name;
        }

        if (email != "") {
            data.teachers[classIndex].email = email;
        }

        if (classes != "") {
            data.teachers[classIndex].classes = classes;
        }

        response.json("teacher with id " + id + " updated.");
    }
});

app.delete('/api/teachers/:id', function (request, response) {
    var id = request.params.id;
    var classIndex = null;

    for (var i = 0; i < data.teachers.length; i++) {
        if (data.teachers[i].id === parseInt(id)) {
            classIndex = i
        }
    }

    if (classIndex == null)
        response.status(404).json("No exercise with if " + id + " found");
    else {
        data.teachers.splice(classIndex, 1);
        response.json("teachers with id " + id + " delete.")
    }
});

app.get('/api/teachers/:classes', function (request, response) {
    var teacher = null;
    var lowerName = parseInt(request.params.slot);
    for (var i = 0; i < data.teachers.length; i++) {
        if (data.teachers[i].classes === lowerName) {
            teacher = data.teachers[i];
            response.json(teacher);
        }
    }
    if (teacher == null) {
        response.status(404).json("No Teacher" + request.params.teachers + " found");
    }
});

app.get('/api/slots', function (request, response) {
    if (request.query.limit >= 0) {
        response.json(data.slots.slice(0, request.query.limit));
    } else {
        response.json(data.slots);
    }
});

app.get('/api/classes/:slot/times', function (request, response) {
    var classe = null;
    var lowerName = parseInt(request.params.slot);
    for (var i = 0; i < data.slots.length; i++) {
        if (data.slots[i].slot === lowerName) {
            classe = data.slots[i];
            response.json(classe);
        }
    }
    if (classe == null) {
        response.status(404).json("No class slot" + request.params.slot + " found");
    }
});

app.get('/api/classes/:id', function (request, response) {
    var id = request.params.id;
    var classe = null;

    for (var i = 0; i < data.classes.length; i++) {
        if (data.classes[i].id === parseInt(id)) {
            classe = data.classes[i];
            response.json(classe);
        }
    }
    if (classe == null) {
        response.status(404).json("No class with id " + id + " found");
    }
});

app.get('/api/classes/:slot/teacher/student', function (req, res) {
    var results = [];
    var lowerName = request.params.slot.toLowerCase();

    for (var i = 0; i < data.teachers.student.length; i++) {
        if (data.slot[i].classes === lowerName) {
            results.push(data.classes[i])
        }
    }
    response.json(results);

});

// app.get('/api/slots', function (request, response) {
//     response.json(data.slots)
// });

app.get('/api/teachers', function (request, response) {
    response.json(data.teachers);
});

app.get('/api/teachers/:classes/subject', function (request, response) {
    if (request.query.limit >= 0) {
        response.json(data.teachers.classes.slice(0, request.query.limit));
    } else {

        response.json(data.teachers.classes);
    }

});

app.get('/api/teachers/:classes/subject', function (request, response) {
    if (request.query.limit >= 0) {
        response.json(data.teachers.classes.slice(0, request.query.limit));
    } else {

        response.json(data.teachers.classes);
    }

});




const crypto = require('crypto');
const { response } = require('express');
const { slots } = require('./data.js');

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

app.post('/', function (req, res) {
    res.send('./public/student.html')
})

app.post('/login', function (req, res) {
    res.send('./public/student.html')
})

app.get('/test', cors(), function (request, next) {
    response.json({ msg: 'This is a Cors-enabled for a single route' });
})

app.listen(8000, () => {
    console.log("server listening on port 8000");
});