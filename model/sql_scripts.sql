create table users (
    id int not null auto_increment,
    user_name text not null,
    pwd text not null,
    email text not null,
    name_first text not null,
    name_last text not null,
    created_by int not null,
    creation_date datetime default sysdate(),

    constraint pk_users primary key(id)
  );

--create table item (
--    id int not null auto_increment,
--    img_path varchar2(255),
--    description	varchar2(255),
--    name varchar2(255),
--    created_by int not null,
--    creation_date datetime default sysdate(),
--
--    constraint pk_users primary key(id)
--  );
--
--create table tag (
--    id int not null auto_increment,
--    name varchar2(255),
--    created_by int not null,
--    creation_date datetime default sysdate(),
--
--    constraint pk_users primary key(id)
--  );
--
--create table item_tag (
--    tag_id	int,
--    item_id	int,
--    created_by int not null,
--    creation_date datetime default sysdate(),
--  );