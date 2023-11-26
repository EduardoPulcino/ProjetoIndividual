var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/buscarDadosArtistas", function (req, res){
    dashboardController.buscarDadosArtistas(req, res);
})

router.get("/buscarDadosInstrumentos", function (req, res){
    dashboardController.buscarDadosInstrumentos(req, res);
});

router.get("/buscarDadosGenero", function (req, res){
    dashboardController.buscarDadosGenero(req, res);
});

module.exports = router