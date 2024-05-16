-- seeds.sql

DO $$
DECLARE
  i INTEGER;
BEGIN
  FOR i IN 1..100 LOOP
    INSERT INTO events (title, description, event_date, organizer)
    VALUES (
      'Event ' || i,
      'Description for Event ' || i,
      CURRENT_DATE + (i || ' days')::INTERVAL,
      'Organizer ' || i
    );
  END LOOP;
END $$;
