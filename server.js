const express = require('express');
const con = require('./model/db_connect');
const queries = require('./model/queries');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const striptags = require('striptags');
const expressSessions = require('express-session');
const app = express();
const saltRounds = 10;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname));
app.use(expressSessions({secret: 'lol, ggwp', saveUninitialized: false, resave: false}));

app.post('/login', function (req, res) {
    const email = req.body.email;
    const pwd = req.body.pwd;
    con.query(queries.login(email), function (err, result) {
        if (err) throw err;
        if (result[0]) {
            bcrypt.compare(pwd, result[0].pwd, function (error, response) {
                if (response) {
                    req.session.nameFirst = result[0].name_first;
                    res.send(result[0].name_first);
                    console.log(req.session);
                } else {
                    res.send('');
                }
            })
        } else {
            res.send('');
        }
    });
});

app.get('/search', (req, res) => {
    const search = JSON.parse(req.query.search);
    con.query(queries.search_query(search, req.query.lower), function (err, result, fields) {
        if (err) throw err;
        if (result[0]) {
            res.send(result);
        } else {
            res.send('');
        }
    });
});

app.post('/singleItem', (req, res) => {
    const item_id = JSON.parse(req.body.item_id);
    con.query(queries.item_query(item_id), function (err, result) {
        if (err) throw err;
        if (result[0]) {
            res.send(result);
        } else {
            res.send('');
        }
    });
});

app.get('/tag_suggestion',  (req, res) => {
    const search = req.body.search;
    con.query(queries.tag_suggestion(search), function (err, result, fields) {
        // console.log(JSON.stringify(result));
        if (err) throw err;
        if (result[0]) {
            res.send(result)
        } else {
            res.send('');
        }
    });
});

app.post('/log_out', (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
});

app.post('/new_user', (req, res) => {
    const nameFirst = striptags(req.body.nameFirst);
    const nameLast = striptags(req.body.nameLast);
    const email = striptags(req.body.email);
    const pwd = striptags(req.body.pwd);
    // Check for empty fields
    if (!nameFirst ||
        !nameLast ||
        !email ||
        !pwd) {
        console.log('Empty fields for new users are not allowed');
        res.send({error: 'Empty fields not allowed', nameFirst: ''});
        return;
    }

    // Check for repeating email
    const validateEmail = new Promise(function (resolve) {
        con.query(queries.login(email), (error, result) => {
            return resolve(result);
        })
    })
    .then(function(result) {
        // If email is already used, stop execution and notify the client
        if (result[0]) {
            res.send({error: 'The email is already used. Provide a different email.', nameFirst: ''});
            return;
        }

        // If all validation pass, create a new account
        bcrypt.hash(pwd, saltRounds, function (err, hash) {
            con.query(queries.newUser(email, nameFirst, nameLast, hash), function (error, result, field) {
                if (err) throw err;
                if (result) {
                    res.send({error: '', nameFirst: nameFirst});
                    req.session.nameFirst = nameFirst;
                    console.log('New user ' + nameFirst + ' was created');
                } else {
                    res.send({error: 'Internal error occurred', nameFirst: ''});
                }
            })
        })
    })
});

app.get('/*', (req, res) => {
    console.log("GET request made to the home page");
    return res.sendFile(__dirname + '/client/index.html');
});

server = app.listen(5000, () => {
    console.log('Server is listening on port: ', server.address().port);
});