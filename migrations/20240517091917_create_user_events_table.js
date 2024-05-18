exports.up = function(knex) {
  return knex.schema.createTable('UserEvents', function(table) {
    table.increments('id');
    table.integer('userId').unsigned().notNullable();
    table.integer('eventId').unsigned().notNullable();
    table.foreign('userId').references('id').inTable('users');
    table.foreign('eventId').references('id').inTable('events');
    table.primary(['userId', 'eventId']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('UserEvents');
};