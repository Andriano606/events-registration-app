exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id');
    table.string('fullName').notNullable();
    table.string('email').notNullable();
    table.date('dateOfBirth').notNullable();
    table.string('source').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};