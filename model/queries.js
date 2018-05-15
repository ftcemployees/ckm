const SQL = require('sql-template-strings');
const login = (username, pwd) => SQL`SELECT id, name_first FROM users where user_name = ${username} and pwd = ${pwd}`;
const tag_query = (tag_id) => SQL`SELECT img_path, description, name FROM item WHERE item_id = (SELECT item_id FROM item_tag WHERE tag_id = ${tag_id})`;
const general_query = (search) => SQL`SELECT img_path, description, name FROM item i WHERE i.description LIKE '%${search}%' OR i.name LIKE '%${search}%'`
const getImages = "select * from users";

exports.login = login;
exports.getImages = getImages;


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