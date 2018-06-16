create table users (
  id int not null auto_increment,
  email varchar(100) not null,
  name_first text not null,
  name_last text not null,
  pwd text not null,
  created_at datetime default now(),
  updated_at datetime default now(),
  deleted_at datetime,

  constraint pk_users primary key(id),
  constraint uk_user_email unique(email)
);

create table item (
  id int not null auto_increment,
  category text not null,
  gender text not null,
  item text not null,
  style text,
  era text,
  description text not null,
  branding text,
  measurement text,
  history text,
  created_at datetime default now(),
  updated_at datetime default now(),
  deleted_at datetime,

  constraint pk_item primary key(id)
);

-- create table item (
--    item_number int not null,
--    category text not null,
--    gender text not null,
--    item text not null,
--    measurement text,
--    era text,
--    style_lines text,
--    description text,
--    branding text,
--    size text,
--    history text,
--    created_at datetime default now(),
--    updated_at datetime default now(),
--    deleted_at datetime
--  );
-- LOAD DATA LOCAL INFILE './Downloads/ckm.tsv' INTO TABLE ftc.item;

create table tag (
  id int not null auto_increment,
  name text not null,
  created_at datetime default now(),
  updated_at datetime default now(),
  deleted_at datetime,

  constraint pk_tag primary key(id)
);

--DELETE FROM tag;
--ALTER TABLE tag AUTO_INCREMENT = 1;
--INSERT INTO tag (name) SELECT * FROM (SELECT distinct LOWER(SUBSTRING_INDEX( SUBSTRING_INDEX( item, ' ', l10.n * 10 + l1.n + 1), ' ', -1)) AS item
--FROM item
--CROSS JOIN (
--    SELECT 1 AS n UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9 UNION ALL SELECT 0
--) l1
--CROSS JOIN (
--    SELECT 1 AS n UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9 UNION ALL SELECT 0
--) l10
--WHERE LENGTH(item) - LENGTH( REPLACE( item, ' ', '')) >= l10.n * 10 + l1.n
--AND LENGTH(item) > 0
--LIMIT 50)  t WHERE LENGTH(item) > 0 ORDER BY item;
--INSERT INTO tag (name) SELECT DISTINCT LOWER(category) FROM item WHERE LENGTH(category) > 0;
--INSERT INTO tag (name) SELECT DISTINCT LOWER(gender) FROM item WHERE LENGTH(gender) > 0;
--
--CREATE DEFINER=`root`@`localhost` TRIGGER `tag` BEFORE INSERT ON `tag` FOR EACH ROW
--BEGIN
--  SET NEW.id = (SELECT IFNULL(MAX(id), 0) + 1 FROM tag);
--END;
--
--Show triggers;
--
--DELIMITER //
--CREATE TRIGGER tag_before_insert
--BEFORE INSERT
--	ON tag FOR EACH ROW
--BEGIN
--  SET NEW.id = (SELECT IFNULL(MAX(id), 0) + 1 FROM tag);
--END; //
--DELIMITER;
--
--
--SELECT `AUTO_INCREMENT`
--FROM  INFORMATION_SCHEMA.TABLES
--WHERE TABLE_SCHEMA = DATABASE()
--AND   TABLE_NAME   = ‘tag’;
--
--SELECT `AUTO_INCREMENT`
--FROM  INFORMATION_SCHEMA.TABLES
--WHERE TABLE_NAME   = 'ftc.tag';