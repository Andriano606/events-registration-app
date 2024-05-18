exports.up = function(knex) {
  return knex.schema.table('events', function(table) {
    table.string('api_id').index();
  });
};

exports.down = function(knex) {
  return knex.schema.table('events', function(table) {
    table.dropColumn('api_id');
  });
};