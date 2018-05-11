const express = require('express');
const con = require('./model/db_connect');
const queries = require('./model/queries');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname));

let user = {};

con.query(queries.login('alexey', 'oceansid'), function (err, result, fields) {
    if (err) throw err;
    app.get('/user', (req, res) => {
        res.send(result);        
    })
});

app.post('/login', function (req, res) {
    const userName = req.body.user_name;
    const pwd = req.body.pwd;
    con.query(queries.login(userName, pwd), function (err, result, fields) {
        if (err) throw err;
        res.json(result[0].name_first);
        user = result[0];
        console.log(user.name_first);
    });
})


server = app.listen(5000, () => {
    console.log('Server is listening on port: ', server.address().port);
})