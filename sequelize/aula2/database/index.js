const Sequelize = require('sequelize');
const sequelize = new Sequelize('banco_teste', 'root', '', {
    dialect: 'mysql', host: 'localhost'
});

module.exports = sequelize;