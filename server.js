const express = require('express');
const con = require('./model/db_connect');
const queries = require('./model/queries');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname));

var user = {};

app.post('/login', function (req, res) {
    const userName = req.body.user_name;
    const pwd = req.body.pwd;
    con.query(queries.login(userName, pwd), function (err, result, fields) {
        if (err) throw err;
        res.send(result[0] ? result[0].name_first : '');
        user = result[0];
        console.log(user);
    });
})


app.post('/log_out', (req, res) => {
    user = {};
    res.sendStatus(200);
})

server = app.listen(5000, () => {
    console.log('Server is listening on port: ', server.address().port);
})