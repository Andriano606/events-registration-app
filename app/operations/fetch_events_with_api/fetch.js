const axios = require('axios');
const { Event } = require('../../models/associations');

CLIENT_ID = 'b6aTNuiB-r0'
CLIENT_SECRET='W9gm6brZM_uJCdDnLsqPVz5wgJwOAf91RvjWXc7A7NySPPfKkaZ_Tw'
ACCESS_TOKEN='VkLEs1gXsav_90AbuqUMkOPC75gSsrx4ZUqzH60m'

async function storeEventIfNotExists(event) {
  const eventExists = await Event.findOne({ where: { api_id: event.api_id } });

  if (!eventExists) {
    await Event.create({
      api_id: event.api_id,
      title: event.title,
      description: event.description,
      event_date: event.event_date,
      organizer: event.organizer || 'Unknown Organizer'
    });
  }
}

async function fetchEvents() {
  let next_events_url = 'https://api.predicthq.com/v1/events';

  while (next_events_url) {
    const options = {
      method: 'GET',
      url: next_events_url,
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${ACCESS_TOKEN}`
      }
    };

    try {
      const response = await axios.request(options);
      next_events_url = response.data.next;
      const results = response.data.results;

      const events = results.map(result => {
        const venueEntity = result.entities.find(entity => entity.type === 'venue' || entity.type === 'event-group');

        return {
          api_id: result.id,
          title: result.title,
          description: result.description,
          event_date: result.start,
          organizer: venueEntity ? venueEntity.name : null,
        };
      });

      events.forEach(event => {
        storeEventIfNotExists(event);
      });
    } catch (error) {
      console.error(error);
    }
  }
}

fetchEvents();