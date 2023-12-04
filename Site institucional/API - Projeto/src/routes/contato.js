var express = require("express");
var router = express.Router();

var contatoController = require("../controllers/contatoController");

//Recebendo os dados do html e direcionando para a função cadastrar de contatoController.js
router.post("/cadastrarMensagem", function (req, res) {
    contatoController.cadastrarMensagem(req, res);
})

// router.post("/autenticar", function (req, res) {
//     contatoController.autenticar(req, res);
// });

module.exports = router;