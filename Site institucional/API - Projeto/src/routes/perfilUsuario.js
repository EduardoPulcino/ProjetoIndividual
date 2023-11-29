var express = require("express");
var router = express.Router();

var perfilController = require ("../controllers/perfilController");

router.get("/dadosPerfil/:idUsuario", function (req, res) {
    perfilController.dadosPerfil(req, res)
});

router.put("/editar/:idPublicacao", function (req, res) {
    perfilController.editar(req, res);
});

router.delete("/deletar/:idPublicacao", function (req, res) {
    perfilController.deletar(req, res);
});

module.exports = router