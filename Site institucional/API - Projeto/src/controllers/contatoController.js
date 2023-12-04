var contatoModel = require("../models/contatoModel")

async function buscarIdPorEmail(email) {
    try {
        var resultado = await contatoModel.buscarIdPorEmail(email);
        
        if(resultado.length <= 0){
            return undefined;
        }  
        var id = resultado[0].idUsuario;

        return id;
    } catch (error) {
        console.error('Erro ao executar a consulta:', error);
        throw error;
    }
}

async function cadastrarMensagem(req, res) {
    try {
        var nome = req.body.nomeServer;
        var email = req.body.emailServer;
        var telefone = req.body.telefoneServer;
        var mensagem = req.body.mensagemServer;
        var idUsuario = await buscarIdPorEmail(email);
        
        if (nome == undefined) {
            res.status(400).send("Seu nome está undefined!");
        } else if (email == undefined) {
            res.status(400).send("Seu email está undefined!");
        } else if (telefone == undefined) {
            res.status(400).send("Sua senha está undefined!");
        } else if(idUsuario == undefined){
            res.status(401).send("Seu id está undefined!");
        } 
        else {
            contatoModel.cadastrarMensagem(nome, email, telefone, mensagem, idUsuario)
                .then(
                    function (resultado) {
                        res.json(resultado);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar o cadastro! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
        }
    } catch (error) {
        console.error('Erro:', error);
    }
}

module.exports = {
    cadastrarMensagem
}