const express = require('express');
const con = require('./model/db_connect');
const queries = require('./model/queries');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
var striptags = require('striptags');
const app = express();
const saltRounds = 10;
var user = {};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname));

app.post('/login', function (req, res) {
    const email = req.body.email;
    const pwd = req.body.pwd;
    con.query(queries.login(email), function (err, result, fields) {
        if (err) throw err;
        if (result[0]) {
            bcrypt.compare(pwd, result[0].pwd, function (error, response) {
                res.send(response ? result[0].name_first : '');
                user = result[0];
                console.log(user);
            })
        }
    });
})

app.get('/search', async (req, res) => {
    const search = req.body.search;
    con.query(queries.general_query(search), function (err, result, fields) {
        if (err) throw err;
        if (result[0]) {
            res.send(result)
        }
    });
})

app.post('/log_out', (req, res) => {
    user = {};
    res.sendStatus(200);
})

app.post('/new_user', (req, res) => {
    const nameFirst = striptags(req.body.nameFirst);
    const nameLast = striptags(req.body.nameLast);
    const email = striptags(req.body.email);
    const pwd = striptags(req.body.pwd);
    bcrypt.hash(pwd, saltRounds, function(err, hash) {
        con.query(queries.newUser(email, nameFirst, nameLast, hash), function (error, result, field) {
            if (err) throw err;
            res.send(nameFirst);
            user = {name_first: nameFirst};
            console.log('New user ' + nameFirst + ' was created');
        })
    })
})

server = app.listen(5000, () => {
    console.log('Server is listening on port: ', server.address().port);
})