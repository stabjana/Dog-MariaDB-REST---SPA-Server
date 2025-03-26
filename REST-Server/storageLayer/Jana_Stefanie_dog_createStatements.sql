drop database if exists dogdb;
create database dogdb;

use dogdb;

create table dog (
    number integer not null primary key,
    name varchar(40) not null,
    weightKg integer not null,
    breed varchar(26) not null,   
    yearOfBirth integer not null
);

select * from dog;

insert into dog values(1, 'Buddy', 25, 'Golden Retriever', 2018);
insert into dog values(2, 'Luna', 18, 'Border Collie', 2020);

drop user if exists 'lucas@localhost';
create user 'lucas@localhost' identified by '2P3d3Yfg';

grant all privileges on dogdb.* to 'lucas@localhost';