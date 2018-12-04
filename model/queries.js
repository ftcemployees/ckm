const SQL = require('sql-template-strings');
const login = (email) => SQL`SELECT id, name_first, pwd FROM users where email = ${email}`;
const newUser = (email, nameFirst, nameLast, pwd) => SQL`
  insert into users
   (email, name_first, name_last, pwd)
  values
   (${email}, ${nameFirst}, ${nameLast}, ${pwd});`;

const tag_autofill = (tag_name) => SQL`SELECT name FROM tag WHERE name LIKE '%${tag_name}%'`;

// const item_query = (id) => SQL`SELECT DISTINCT item_number AS 'id', category, gender, item, era, description FROM ftc.item WHERE item_number = ${id}`;
const item_query = (id) => SQL`SELECT * FROM ftc.item WHERE item_number = ${id}`;

const search_query = function search(filters, lower){
    let filter_query =
        (!Object.keys(filters).map((column) => filters[column]).filter(Boolean).join('')) ?
            `LIMIT 50 OFFSET ${lower}` :
            `WHERE (${
                Object.keys(filters).map((column) => 
                    filters[column].map((filter) => 
                        `${column} = '${filter}'`)
                        .filter(Boolean).join(` OR `))
                    .filter(Boolean).join(`) AND (`)
                }) LIMIT 50 OFFSET ${lower}`;

    let query = SQL`SELECT DISTINCT id, category, gender, item, era, description FROM ftc.item `.append(filter_query);

    return query;
};

const tag_suggestion = () => SQL`SELECT DISTINCT category AS name, gender AS name, item AS name FROM ftc.item;`;
const getImages = "select * from users";

exports.login = login;
exports.tag_autofill = tag_autofill;
exports.item_query = item_query;
exports.search_query = search_query;
exports.tag_suggestion = tag_suggestion;
exports.getImages = getImages;
exports.newUser = newUser;