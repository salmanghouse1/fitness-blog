require('.env').config();

const Sequelize = require('sequelize');


// create new sequelize object and instantiate it, pass in the environment variables, set dialect and localhost
const sequelize = new Sequelize(process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME, {
    // set the dialect host and dialect options
    dialect: 'mysql',
    host: 'localhost',
    dialectOptions: {
        decimalNumbers: true,
    },
})



module.exports = sequelize;