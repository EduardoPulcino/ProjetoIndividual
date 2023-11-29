var perfilModel = require("../models/perfilModel");

function dadosPerfil(req, res) {
    
    var idUsuario = req.params.idUsuario;

    perfilModel.dadosPerfil(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function editar(req, res) {
    var idPublicacao = req.params.idPublicacao;
    var novoInstrumento = req.body.instrumentoServer;
    var novoArtista = req.body.nomeArtistaServer;
    var novoGenero = req.body.generoServer;
    var novaUrl = req.body.urlServer;
    

    perfilModel.editar(idPublicacao, novoInstrumento, novoArtista, novoGenero, novaUrl)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function deletar(req, res) {
    var idPublicacao = req.params.idPublicacao;

    perfilModel.deletar(idPublicacao)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    dadosPerfil,
    editar,
    deletar
}