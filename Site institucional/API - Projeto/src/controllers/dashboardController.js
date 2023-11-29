var dashboardModel = require("../models/dashboardModel");

function buscarDadosArtistas(req, res) {

    console.log(`Recuperando as ultimas medidas`);

    dashboardModel.buscarDadosArtistas().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarDadosInstrumentos(req, res){
    dashboardModel.buscarDadosInstrumentos().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarDadosGenero(req, res){
    dashboardModel.buscarDadosGenero().then(function (resultado) {
        if (resultado.length > 0) {
            for (var i = 0; i < resultado; i++) {
                // var outros = 

            }
            console.log('TAMO AQUI!!!!!!!!!!!!!', resultado)
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarDadosArtistas,
    buscarDadosInstrumentos,
    buscarDadosGenero
}