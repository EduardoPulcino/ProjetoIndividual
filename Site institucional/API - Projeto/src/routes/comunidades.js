var express = require("express");
var router = express.Router();

var comunidadeController = require("../controllers/comunidadeController");

router.get("/listar", function (req, res) {
    comunidadeController.listar(req, res)
});

module.exports = router;
