CREATE TABLE go_wilmo_users (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE, 
  password TEXT NOT NULL
);