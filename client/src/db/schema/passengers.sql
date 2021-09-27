DROP TABLE IF EXISTS passengers CASCADE;

-- Create passengers table
CREATE TABLE passengers (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  trip_id INTEGER REFERENCES trips(id) ON DELETE CASCADE
);