const axios = require ('axios')


function aguardar (ms) {
    if (typeof ms === 'number') {
    return new Promise(resolve => setTimeout(resolve, ms))
    } else {
        return Promise.reject()
    }
}


console.log('Print 1')

console.log('Print 2')

aguardar(2000)
    .then(() => {
        //Contexto de sucesso
        console.log('A promessa acabou!')

        //......
    })
    .catch(()=>{
        //Contexto de falha
        console.log('A promessa falhou!')
    })

console.log('Print 3')


const githubAPI = axios.create({
    baseURL: "https://api.github.com"
})

githubAPI.get('users/alvarojfjunior')
    .then(resultado => {
        console.log('Bem vindo, ', resultado.data.name)
    })


const viacepAPI = axios.create({
    baseURL: "https://viacep.com.br/ws"
}) 

viacepAPI.get('21520680/json')
    .then(resultado => {
        console.log('O endereço é: ', resultado.data)
    })
    .catch(erro => {
        console.log('Houve um erro na requisição. ', erro.message)
    })


const pokemonAPI = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
}) 

pokemonAPI.get('pokemon/ditto')
    .then(resultado => {
        console.log('O resultado da API é: ', resultado.data)
    })
    .catch(erro => {
        console.log('Houve um erro na requisição. ', erro.message)
    })