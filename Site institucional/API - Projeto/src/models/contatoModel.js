var database = require("../database/config")

function cadastrarMensagem(nome, email, telefone, mensagem, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO contato (nome, email, telefone, mensagem, fkUsuario ) VALUES ('${nome}', '${email}', '${telefone}', '${mensagem}', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarIdPorEmail(email) {
    var instrucao = `
        select idUsuario from usuario where email = '${email}'
    `
    return database.executar(instrucao);
}


module.exports = {
    cadastrarMensagem,
    buscarIdPorEmail
}