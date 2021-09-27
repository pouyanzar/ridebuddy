DROP TABLE IF EXISTS riders CASCADE;

-- Create riders table
CREATE TABLE riders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  description TEXT NOT NULL
);