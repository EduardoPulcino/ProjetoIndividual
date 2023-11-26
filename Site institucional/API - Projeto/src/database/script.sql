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

select * from usuario;
select * from publicacao;
select artista, count(artista) as quantidade from publicacao group by artista order by quantidade desc; 
select instrumento, count(instrumento) as quantidade from publicacao group by instrumento order by quantidade desc;
select genero, count(genero) as quantidade from publicacao group by genero order by quantidade desc;
select usuario.username, p.instrumento, p.artista, p.genero, p.urlPDF, p.fkUsuario from publicacao as p join usuario on fkUsuario = idUsuario order by idPublicacao desc;




