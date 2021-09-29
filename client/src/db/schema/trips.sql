DROP TABLE IF EXISTS trips CASCADE;

-- Create trips table
CREATE TABLE trips (
  id SERIAL PRIMARY KEY NOT NULL,
  origin VARCHAR(20) NOT NULL,
  destination VARCHAR(20) NOT NULL,
  departure TIMESTAMP NOT NULL,
  price INTEGER NOT NULL,
  available_seats INTEGER NOT NULL,
  available_luggages INTEGER NOT NULL,
  make VARCHAR(20) NOT NULL,
  model VARCHAR(20) NOT NULL,
  year SMALLINT NOT NULL,
  color VARCHAR(10) NOT NULL,
  plate VARCHAR(10) NOT NULL,
  pic TEXT NOT NULL
);