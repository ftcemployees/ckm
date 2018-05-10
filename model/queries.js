const SQL = require('sql-template-strings');
const login = (username, pwd) => SQL`SELECT id, name_first FROM users where user_name = ${username} and pwd = ${pwd}`;
const getImages = "select * from users";

exports.login = login;
exports.getImages = getImages;
