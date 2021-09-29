DROP TABLE IF EXISTS requests CASCADE;

-- Create requests table
CREATE TABLE requests (
  id SERIAL PRIMARY KEY NOT NULL,
  origin VARCHAR(50) NOT NULL,
  destination VARCHAR(50) NOT NULL,
  required_seat INTEGER NOT NULL,
  departure TIMESTAMP,
  description TEXT
);

