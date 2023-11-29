var database = require("../database/config");

function dadosPerfil(idUsuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function dadosPerfil()");
    var instrucao = `
    select p.idPublicacao, usuario.username, p.instrumento, p.artista, p.genero, p.urlPDF, p.fkUsuario from publicacao as p join usuario on fkUsuario = idUsuario where fkUsuario = ${idUsuario} order by idPublicacao desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editar(idPublicacao, novoInstrumento, novoArtista, novoGenero, novaUrl) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaUrl, idPublicacao);
    var instrucao = `
        UPDATE publicacao SET urlPdf = '${novaUrl}', instrumento = '${novoInstrumento}', artista = '${novoArtista}', genero = '${novoGenero}'  WHERE idPublicacao = ${idPublicacao};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(idPublicacao) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idPublicacao);
    var instrucao = `
        DELETE FROM publicacao WHERE idPublicacao = ${idPublicacao};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    dadosPerfil,
    editar,
    deletar
}