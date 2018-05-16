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

insert into users
   (email, name_first, name_last, pwd)
  values
   ('1993alexey@gmail.com', 'Alex', 'Shnyrov', 'oceansid');
insert into users
   (email, name_first, name_last, pwd)
  values
   ('connor@gmail.com', 'Connor', 'Spratling', 'oceansid');
insert into users
   (email, name_first, name_last, pwd)
  values
   ('lu@gmail.com', 'Lu', 'Lulu', 'oceansid');
insert into users
   (email, name_first, name_last, pwd)
  values
   ('brain@gmail.com', 'Brain', 'Brainovich', 'oceansid');
