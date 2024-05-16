exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      let seedData = [];
      for (let i = 1; i <= 100; i++) {
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