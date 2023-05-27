var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', function(req, res, next){
  let login = req.body.email
  let senha = req.body.senha

  if(login == 'dev@gmail.com' && senha == '12345'){
    res.send(`Seja bem vindo... Informações: ${login}  |  ${senha}`)
  } else {
    res.send('ERRO --- login ou senha incorretos, tente novamente...')
  }

  
});

module.exports = router;