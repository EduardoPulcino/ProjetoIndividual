var database = require("../database/config");

function buscarDadosArtistas() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select artista, count(artista) as quantidade from publicacao group by artista order by quantidade desc limit 5`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosInstrumentos() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select instrumento, count(instrumento) as quantidade from publicacao group by instrumento order by quantidade desc;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosGenero() {
    
    instrucaoSql =  ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        todos_generos.genero, 
        COUNT(publicacao.genero) AS quantidade,
        SUM(COUNT(publicacao.genero)) OVER () AS total
    FROM (
        SELECT DISTINCT genero 
        FROM publicacao
    ) AS todos_generos
    LEFT JOIN publicacao ON todos_generos.genero = publicacao.genero
    GROUP BY todos_generos.genero; `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarDadosArtistas,
    buscarDadosInstrumentos,
    buscarDadosGenero
}