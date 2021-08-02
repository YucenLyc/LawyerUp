DROP TABLE IF EXISTS specialities CASCADE;
DROP TABLE IF EXISTS lawyers CASCADE;
DROP TABLE IF EXISTS clients CASCADE;
DROP TABLE IF EXISTS user_types CASCADE;
DROP TABLE IF EXISTS cases CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS messages CASCADE;
DROP TABLE IF EXISTS locations CASCADE;
DROP TABLE IF EXISTS users CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE clients (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE lawyers (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  profile TEXT,
  rate INTEGER  NOT NULL DEFAULT 0,
  years_of_experience INTEGER  NOT NULL DEFAULT 1
);

CREATE TABLE specialities (
  id SERIAL PRIMARY KEY NOT NULL,
  lawyer_id INTEGER REFERENCES lawyers(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE user_types (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE cases (
  id SERIAL PRIMARY KEY NOT NULL,
  lawyer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  client_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  date DATE,
  description TEXT
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  receiver_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  time TIMESTAMP,
  message TEXT
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  lawyer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  client_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  date DATE,
  content TEXT
);

CREATE TABLE locations (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  city VARCHAR(255) NOT NULL
);