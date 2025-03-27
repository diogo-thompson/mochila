const Sequelize = require('sequelize')
const database = require('../database/index')

const Usuario = database.define('usuarios', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    senha: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false
})

module.exports = Usuario