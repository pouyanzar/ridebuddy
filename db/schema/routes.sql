DROP TABLE IF EXISTS routes CASCADE;

-- Create routes table
CREATE TABLE routes (
  id SERIAL PRIMARY KEY NOT NULL,
  origin VARCHAR(50) NOT NULL,
  destination VARCHAR(50) NOT NULL
);