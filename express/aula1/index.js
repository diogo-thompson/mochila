const express = require('express')
const app = express()

//O método GET geralmente é usado para retornar informações
app.get('/clientes', (req, res)=> {
    console.log('Bateu na minha rota de clientes')
    
    const todosOsClientes = [
        {
            id: 1,
            nome: 'Álvaro Ferreira',
            idade: 26
        },
        {
            id: 2,
            nome: 'Patrick Reis',
            idade: 27
        }
    ]
    
    res.json(todosOsClientes)
})

//O método POST geralmente é usado para inserir informações
app.post('/clientes', (req, res)=> {
    console.log('Bateu na minha rota de POST')
    res.json('Um registro foi cadastrado no banco de dados')
})

//O método DELETE geralmente é usado para deletar dados
app.delete('/clientes', (req, res)=> {
    console.log('Bateu na minha rota de DELETE')
    res.json('Um registro foi apagado do banco de dados')
})

//O método PUT geralmente é usado para alterar dados
app.put('/clientes', (req, res)=> {
    console.log('Bateu na minha rota de PUT')
    res.json('Um registro foi alterado no banco de dados')
})

app.listen(3333, ()=> {
    console.log('O servidor foi iniciado com sucesso')
})

