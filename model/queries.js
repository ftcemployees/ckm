const SQL = require('sql-template-strings');
const login = (email) => SQL`SELECT id, name_first, pwd FROM users where email = ${email}`;
const newUser = (email, nameFirst, nameLast, pwd) => SQL`
  insert into users
   (email, name_first, name_last, pwd)
  values
   (${email}, ${nameFirst}, ${nameLast}, ${pwd});`;
const getImages = "select * from users";

exports.login = login;
exports.getImages = getImages;
exports.newUser = newUser;