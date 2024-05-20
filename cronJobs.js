const cron = require('node-cron');
const fetchNewEvents = require('./app/operations/fetch_events_with_api/fetch');

function startCronJobs() {
  cron.schedule('59 23 * * *', () => {
    fetchNewEvents();
  });
}

module.exports = startCronJobs;