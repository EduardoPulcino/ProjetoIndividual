create database coversheets;

use coversheets;

create table usuario (
	idUsuario int primary key auto_increment,
    nome varchar (45),
    sobrenome varchar (45),
    email varchar(45),
    username varchar(45) unique,
    senha varchar(45)
);

create table publicacao (
	idPublicacao int primary key auto_increment,
    instrumento varchar (45),
    artista varchar (45),
    genero varchar (45),
    urlPdf varchar (255),
    fkUsuario int,
    foreign key (fkUsuario) references usuario (idUsuario)
);

create table contato (
	idContato int primary key auto_increment,
	nome varchar (45),
    email varchar (45),
    telefone char (11),
    mensagem varchar (255),
    fkUsuario int,
    foreign key (fkUsuario) references usuario (idUsuario)
);

insert into usuario values 
	(null, 'Eduardo', 'Pulcino', 'eduardo.pulcino@sptech.school', 'Eduardo', 'Teste123@');
    
insert into publicacao values 
	(null, 'piano', 'Tim Maia', 'MPB', 'https://drive.google.com/file/d/14akZR1QZwKJMldtxyWqfol1puwgzLtLR/preview', 1),
    (null, 'piano', 'Michael Jackson', 'POP', 'https://drive.google.com/file/d/14akZR1QZwKJMldtxyWqfol1puwgzLtLR/preview', 1),
    (null, 'trombone', 'Bruno Mars', 'POP', 'https://drive.google.com/file/d/14akZR1QZwKJMldtxyWqfol1puwgzLtLR/preview', 1),
    (null, 'piano', 'AC/DC', 'Rock', 'https://drive.google.com/file/d/14akZR1QZwKJMldtxyWqfol1puwgzLtLR/preview', 1),
    (null, 'saxofone', 'Bruno Mars', 'POP', 'https://drive.google.com/file/d/14akZR1QZwKJMldtxyWqfol1puwgzLtLR/preview', 1),
    (null, 'saxofone', 'Bruno Mars', 'POP', 'https://drive.google.com/file/d/14akZR1QZwKJMldtxyWqfol1puwgzLtLR/preview', 1),
    (null, 'violino', 'Queen', 'Rock', 'https://drive.google.com/file/d/14akZR1QZwKJMldtxyWqfol1puwgzLtLR/preview', 1),
    (null, 'violao', 'Aline Barros', 'Gospel', 'https://drive.google.com/file/d/14akZR1QZwKJMldtxyWqfol1puwgzLtLR/preview', 1),
    (null, 'violao', 'Adoniran Barbosa', 'Samba', 'https://drive.google.com/file/d/14akZR1QZwKJMldtxyWqfol1puwgzLtLR/preview', 1),
    (null, 'saxofone', 'Adoniran Barbosa', 'Samba', 'https://drive.google.com/file/d/14akZR1QZwKJMldtxyWqfol1puwgzLtLR/preview', 1);
