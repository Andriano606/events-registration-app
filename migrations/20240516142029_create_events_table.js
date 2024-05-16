exports.up = function(knex) {
  return knex.schema.createTable('events', function(table) {
    table.increments('id');
    table.string('title').notNullable();
    table.text('description').notNullable();
    table.date('event_date').notNullable();
    table.string('organizer').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('events');
};