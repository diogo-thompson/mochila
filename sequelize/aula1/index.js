
/*

TESTE PROMISE

function aguardar (ms) {
    if (typeof ms === 'number'){
        return new Promise(resolve => setTimeout(resolve, ms))
    } else {
        return Promise.reject()
    }
}

console.log('Print1')

console.log('Print2')

aguardar(2000)
    .then(() => {
        //contexto de sucesso
        console.log('A promessa acabou!')

        ///.....
    })
    .catch(()=> {
        //contexto de falha
        console.log('A promessa falhou')
    })

console.log('Print3') */


/* CONSULTA CEP */

const axios = require('axios')

const cepAPI = axios.create({
    baseURL: "https://viacep.com.br/ws"
})

cepAPI.get('21520680/json')
    .then(resultado => {
        console.log('O endereço deste cep é: ', resultado.data)
    })
    .catch(erro => {
        console.log('Houve um erro na requisição.', erro.message)
    })

    /* CONSULTA POKEMON

    const axios = require('axios')

const pokeAPI = axios.create({
    baseURL: "https://pokeapi.co/api/V2"
})

pokeAPI.get('pokemon/ditto')
    .then(resultado => {
        console.log('O pokemon é: ', resultado)
    })
    .catch(erro => {
        console.log('Houve um erro na requisição.', erro.message)
    }) */