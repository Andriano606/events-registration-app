exports.up = function(knex) {
  return knex.schema.table('users', function(table) {
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.table('users', function(table) {
    table.dropColumn('createdAt');
    table.dropColumn('updatedAt');
  });
};