const express = require('express');
const con = require('./model/db_connect');
const queries = require('./model/queries');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
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

app.post('/log_out', (req, res) => {
    user = {};
    res.sendStatus(200);
})

app.post('/new_user', (req, res) => {
    const nameFirst = req.body.nameFirst;
    const nameLast = req.body.nameLast;
    const email = req.body.email;
    const pwd = req.body.pwd;
    console.log(email);
    bcrypt.hash(pwd, saltRounds, function(err, hash) {
        console.log(hash);
        con.query(queries.newUser(email, nameFirst, nameLast, hash), function (error) {
            if (err) throw err;
            res.sendStatus(200);
            console.log('New user was created');
        })
    })
})

server = app.listen(5000, () => {
    console.log('Server is listening on port: ', server.address().port);
})