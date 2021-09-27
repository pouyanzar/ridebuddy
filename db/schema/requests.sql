DROP TABLE IF EXISTS requests CASCADE;

-- Create requests table
CREATE TABLE requests (
  id SERIAL PRIMARY KEY NOT NULL,
  passenger_id INTEGER REFERENCES passengers(id) ON DELETE CASCADE,
  required_seat INTEGER NOT NULL,
  departure TIMESTAMP,
  description TEXT
);