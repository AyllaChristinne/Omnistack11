const knex = require('knex')
const configuration = require('../../knexfile');

const connection = knex(configuration.development); //escolhe a conexão de desenvolvimento no knexfile

module.exports = connection; //exporta a conexão com o BD