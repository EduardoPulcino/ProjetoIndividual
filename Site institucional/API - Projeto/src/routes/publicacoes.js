var express = require("express");
var router = express.Router();

var publicacaoController = require("../controllers/publicacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/publicar", function (req, res) {
    publicacaoController.publicar(req, res);
})

router.post("/autenticar", function (req, res) {
    publicacaoController.autenticar(req, res);
});

module.exports = router;