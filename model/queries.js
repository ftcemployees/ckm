const SQL = require('sql-template-strings');
const login = (username, pwd) => SQL`SELECT id, name_first FROM users where user_name = ${username} and pwd = ${pwd}`;
// const tag_query = (tag_id) => SQL`SELECT img_path, description, name FROM item WHERE id = (SELECT item_id FROM item_tag WHERE tag_id = ${tag_id})`;
// const general_query = (search) => SQL`SELECT img_path, description, name FROM item i WHERE i.description LIKE '%${search}%' OR i.name LIKE '%${search}%'`
// + ` OR (SELECT name FROM tag WHERE id = (SELECT tag_id FROM item_tag WHERE i.id = item_id)) LIKE '%${search}%'`;
// const create_tags = () => SQL`INSERT INTO tag SELECT DISTINCT category, gender, item FROM item`
const getImages = "select * from users";

exports.login = login;
// exports.tag_query = tag_query;
// exports.general_query= general_query;
// exports.create_tags = create_tags;
exports.getImages = getImages;
