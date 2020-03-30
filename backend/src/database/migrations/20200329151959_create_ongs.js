exports.up = function(knex) { //o que vai acontecer quando executar essa migration
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  })
}; 

exports.down = function(knex) { //rollback em caso de erro
  return knex.schema.dropTable('ongs');
};
