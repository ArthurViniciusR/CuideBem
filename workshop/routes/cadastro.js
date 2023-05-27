var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('cadastro');
});

router.post('/', function(req, res, next){
  let nome = req.body.nome
  let cpf = req.body.cpf
  let data = req.body.data
  let tel = req.body.tel
  let email = req.body.email
  let senha = req.body.senha

  res.send(`Cadastro enviado com sucesso: INFORMAÇÕES: ${nome}  |  ${cpf}  |  ${data}  |  ${tel}  |  ${email}  |  ${senha}`)
});

module.exports = router;