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
 select idUsuario from usuario where email = 'teste@teste.com' LIMIT 1; 
select * from usuario;
select * from publicacao;
select * from contato;

select artista, count(artista) as quantidade from publicacao group by artista order by quantidade desc; 
select instrumento, count(instrumento) as quantidade from publicacao group by instrumento order by quantidade desc;
select genero, count(genero) as quantidade from publicacao group by genero order by quantidade desc;
select usuario.username, p.instrumento, p.artista, p.genero, p.urlPDF, p.fkUsuario from publicacao as p join usuario on fkUsuario = idUsuario order by idPublicacao desc;
DELETE FROM publicacao WHERE idPublicacao = 12;
select artista, count(artista) as quantidade from publicacao group by artista order by quantidade desc limit 5;
SELECT 
    genero, 
    COUNT(genero) AS quantidade,
    SUM(quantidade) OVER () AS total_de_registros
FROM (
    SELECT genero, COUNT(genero) AS quantidade 
    FROM publicacao 
    GROUP BY genero
) AS subquery
GROUP BY genero
ORDER BY quantidade desc;

SELECT 
        todos_generos.genero, 
        COUNT(publicacao.genero) AS quantidade,
        SUM(COUNT(publicacao.genero)) OVER () AS total
    FROM (
        SELECT DISTINCT genero 
        FROM publicacao
    ) AS todos_generos
   JOIN publicacao ON todos_generos.genero = publicacao.genero
    GROUP BY todos_generos.genero;
    
    select artista, count(artista) as quantidade from publicacao group by artista order by quantidade desc limit 5;

SELECT 
    CASE 
        WHEN RANK() OVER (ORDER BY quantidade DESC) <= 4 THEN genero
        ELSE 'Outros'
    END AS genero,
    SUM(quantidade) AS quantidade
FROM (
    SELECT 
        todos_generos.genero, 
        COUNT(publicacao.genero) AS quantidade
    FROM (
        SELECT DISTINCT genero 
        FROM publicacao
    ) AS todos_generos
    JOIN publicacao ON todos_generos.genero = publicacao.genero
    GROUP BY todos_generos.genero
) AS contagem_por_genero
GROUP BY genero
ORDER BY SUM(quantidade) DESC;
