
function trazerDados (req, res) {
    //inicio controller
    res.json([
      {
        id: 153,
        nome: 'Álvaro',
        email: 'alvarojfjunior@gmail.com',
        senha: '123'
      },
      {
        id: 154,
        nome: 'Guilherme',
        email: 'guilherme@gmail.com',
        senha: '123'
      }
    ])
    //fim controller
  }


  function inserirDados (req, res) {
    //inicio controller
    //processo de cadastrar dados no banco de dados
    console.log(req.body)
    res.send('OK, teste rota cadastrar. ' + req.body.email);
    //fim controller
  }

  function alterarDados(req, res) {
    console.log(req.body)
    console.log(req.params)
    res.send('Ok, teste rota alterar.')
  }

  function deletarDados(req, res) {
    console.log(req.params)
    res.send('Registro deletado!')
  }

  function uploadArquivo(req, res) {
    res.send('Upload realizado com sucesso!')
  }

  
  module.exports ={
    trazerDados,
    inserirDados,
    alterarDados,
    deletarDados,
    uploadArquivo
  }