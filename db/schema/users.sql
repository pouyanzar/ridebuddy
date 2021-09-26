DROP TABLE IF EXISTS users CASCADE;

-- Create users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  age SMALLINT NOT NULL,
  gender VARCHAR(20) NOT NULL,
  password VARCHAR(50) NOT NULL
);