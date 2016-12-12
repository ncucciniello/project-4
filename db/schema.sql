BEGIN;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS art;


CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  username TEXT NOT NULL
);

CREATE TABLE art(
  post_id SERIAL NOT NULL,
  artist TEXT,
  img_url TEXT,
  address TEXT NOT NULL,
  lat DECIMAL(9,6) NOT NULL,
  lng DECIMAL(9,6) NOT NULL,
  info TEXT
);

COMMIT;
