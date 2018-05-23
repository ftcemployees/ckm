const SQL = require('sql-template-strings');
const login = (email) => SQL`SELECT id, name_first, pwd FROM users where email = ${email}`;
const newUser = (email, nameFirst, nameLast, pwd) => SQL`
  insert into users
   (email, name_first, name_last, pwd)
  values
   (${email}, ${nameFirst}, ${nameLast}, ${pwd});`;
// const tag_query = (tag_id) => SQL`SELECT img_path, description, name FROM item WHERE item_id = (SELECT item_id FROM item_tag WHERE tag_id = ${tag_id})`;
const tag_autofill = (tag_name) => SQL`SELECT name FROM tag WHERE name LIKE '%${tag_name}%'`;
// const general_query = (search) => SQL`
// SELECT * FROM item
// WHERE category LIKE '%${search}%'
// OR gender LIKE '%${search}%'
// OR item LIKE '%${search}%'
// OR style LIKE '%${search}%'
// OR era LIKE '%${search}%'
// OR description LIKE '%${search}%'
// OR branding LIKE '%${search}%'
// OR measurement LIKE '%${search}%'
// OR history LIKE '%${search}%' LIMIT 15`;
const general_query = () => SQL`
SELECT * FROM item LIMIT 15`;
const tag_suggestion = () => SQL`
SELECT * FROM tag`;
const getImages = "select * from users";

exports.login = login;
exports.tag_autofill = tag_autofill;
// exports.tag_query = tag_query;
exports.general_query = general_query;
exports.tag_suggestion = tag_suggestion;
// exports.create_tags = create_tags;
exports.getImages = getImages;
exports.newUser = newUser;

// Potential outline for user, item, tag, and item_tag tables
//
// CREATE TABLE user (
//     email		varchar2(255),
//     pwd		varchar2(255),
//     first_name	varchar2(255),
//     last_name	varchar2(255)
// );
//
// CREATE TABLE item (
//     item_id 		int,
//     img_path		varchar2(255),
//     description	varchar2(255),
//     name		    varchar2(255)
// );
//
// CREATE TABLE tag (
//     tag_id	int,
//     name 	varchar2(255)
// );
//
// CREATE TABLE item_tag (
//     tag_id	int,
//     item	_id	int
// );
