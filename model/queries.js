const SQL = require('sql-template-strings');
const login = (email) => SQL`SELECT id, name_first, pwd FROM users where email = ${email}`;
const newUser = (email, nameFirst, nameLast, pwd) => SQL`
  insert into users
   (email, name_first, name_last, pwd)
  values
   (${email}, ${nameFirst}, ${nameLast}, ${pwd});`;
const tag_query = (tag_id) => SQL`SELECT img_path, description, name FROM item WHERE item_id = (SELECT item_id FROM item_tag WHERE tag_id = ${tag_id})`;
const general_query = (search) => SQL`SELECT img_path, description, name FROM item i WHERE i.description LIKE '%${search}%' OR i.name LIKE '%${search}%'`
+ ` OR (SELECT name FROM tag WHERE tag_id = (SELECT tag_id FROM item_tag WHERE i.item_id = item_id)) LIKE '%${search}%'`;
const getImages = "select * from users";

exports.login = login;
exports.tag_query = tag_query;
exports.general_query= general_query;
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
