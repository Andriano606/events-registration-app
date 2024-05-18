exports.seed = function(knex) {
  return knex('UserEvents').del()
    .then(function () {
      return knex('events').del();
    })
    .then(function () {
      let seedData = [];
      for (let i = 1; i <= 500; i++) {
        seedData.push({
          title: 'Event ' + i,
          description: 'Description for Event ' + i,
          event_date: knex.raw(`CURRENT_DATE + INTERVAL '${i} days'`),
          organizer: 'Organizer ' + i
        });
      }
      return knex('events').insert(seedData);
    });
};