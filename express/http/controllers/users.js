
function getDados (req, res) {
    //inicio controller
    res.send('OK, minha rota retornou isto.');
    //fim controller
  }


  function cadastraDados (req, res) {
    //inicio controller
    //processo de cadastrar dados no banco de dados
    res.send('OK, teste rota cadastrar.');
    //fim controller
  }

  
  module.exports ={
    getDados,
    cadastraDados
  }