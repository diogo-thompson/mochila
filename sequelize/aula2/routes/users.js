var express = require('express');
var router = express.Router();
var Usuario = require('../models/Usuario');

/* GET users listing. */
router.get('/', async function(req, res, next) {

  //Cria registro no banco
  // await Usuario.create({
  //   nome: 'Guilherme',
  //   email: 'guilherme@dh.com',
  //   senha: '123'
  // })

  //Retorna todos usuários no banco
  // const listaDeUsuariosDoBanco = await Usuario.findAll()

  //Retorna o usuário de id 2
  //const listaDeUsuariosDoBanco = await Usuario.findByPk(2)

  //Retorna usuários com o nome de Guilherme
  // const listaDeUsuariosDoBanco = await Usuario.findAll({
  //   where: {
  //     nome: 'Guilherme'
  //   }
  // })

  //Atualizar usuário
      // const retornoUpdate = await Usuario.update({
      //   nome: 'Registro Alterado',
      //   senha: '123456'
      // },{
      //   where: {
      //     id: 3
      //   }
      // })
  

  //deletar usuário
  // const retornoDelete = await Usuario.destroy({
  //   where: {
  //     id: 5
  //   }
  // })

  //console.log(listaDeUsuariosDoBanco) //imprime no console

  res.json(listaDeUsuariosDoBanco);
});

module.exports = router;
