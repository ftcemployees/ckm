const SQL = require('sql-template-strings');
const login = (email) => SQL`SELECT id, name_first, pwd FROM users where email = ${email}`;
const newUser = (email, nameFirst, nameLast, pwd) => SQL`
  insert into users
   (email, name_first, name_last, pwd)
  values
   (${email}, ${nameFirst}, ${nameLast}, ${pwd});`;
// const tag_query = (tag_id) => SQL`SELECT img_path, description, name FROM item WHERE item_id = (SELECT item_id FROM item_tag WHERE tag_id = ${tag_id})`;
const tag_autofill = (tag_name) => SQL`SELECT name FROM tag WHERE name LIKE '%${tag_name}%'`;

// const general_query = (search) => SQL`SELECT DISTINCT item_number AS 'id', category, gender, item, era, description FROM ftc.item${search} LIMIT 100`;
const search_query = function search(filters){
    // console.log(filters);
    let query = SQL`SELECT DISTINCT item_number AS 'id', category, gender, item, era, description FROM ftc.item`;
    if (filters.eras.length === 0 && filters.categories.length === 0 && filters.genders.length === 0 && filters.items.length === 0)
        query.append(` LIMIT 100`);
    else {
        query.append(` WHERE (`);
        query.append(
            [filters.eras.map((val) => `era = '${val}'`).filter(Boolean).join(' OR ')
            ,filters.categories.map((val) => `category = '${val}'`).filter(Boolean).join(' OR ')
            ,filters.genders.map((val) => `gender = '${val}'`).filter(Boolean).join(' OR ')
            ,filters.items.map((val) => `item = '${val}'`).filter(Boolean).join(' OR ')].filter(Boolean).join(') AND ('));
        query.append(`) LIMIT 100`);
    }
    // console.log(query);
    return query;
};

// const tag_suggestion = () => SQL`SELECT * FROM tag`;
const tag_suggestion = () => SQL`SELECT DISTINCT category AS name, gender AS name, item AS name FROM ftc.item;`;
const getImages = "select * from users";

exports.login = login;
exports.tag_autofill = tag_autofill;
// exports.tag_query = tag_query;
exports.search_query = search_query;
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
