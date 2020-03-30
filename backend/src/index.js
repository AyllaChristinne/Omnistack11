const express = require('express');
const routes = require('./routes'); //importando as rotas  //'./' indica que é arquivo
const cors = require('cors');

const app = express();

app.use(cors()); //Define quem pode acessar o backend
app.use(express.json());
app.use(routes);

app.listen(3333); //porta para localhost 
































/**
 * Métodos HTTP:
 *
 * GET: Buscar/listar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: alterar uma informação do backend
 * DELETE: deletar uma informação do backend
 */

/**
 * Tipos de parâmetros:
 * 
 * QUERY Parms: Parâmetros nomeados enviados na rota após '?' (filtros, paginação)
 * ROUTE Parms: Parâmetros utilizados para identificar reursos
 * Request BODY: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Bancos de dados:
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builders: table('users').select('*').where()  //independe do BD
  * Migrations: versionamento do BD
  */

  /**
   * Entidade: qualquer coisa q será salva no BD
   * Funcionalidade: ações das entidades
   */