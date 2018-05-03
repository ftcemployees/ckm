create table users (
  id int not null auto_increment,
  user_name text not null,
  pwd text not null,
  email text not null,
  name_first text not null,
  name_last text not null,
  created_at datetime default now(),
  updated_at datetime default now(),
  deleted_at datetime,
  
  constraint pk_users primary key(id)
);