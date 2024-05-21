const cron = require('node-cron');
const { fetchEvents, seedUsersAndEvents } = require('./app/operations/fetch_events_with_api/fetch');

function startCronJobs() {
  cron.schedule('59 23 * * *', () => {
    fetchEvents();
    seedUsersAndEvents();
  });
}

module.exports = startCronJobs;