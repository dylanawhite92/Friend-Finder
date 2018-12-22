CREATE DATABASE friends_db;
USE friends_db;

CREATE TABLE IF NOT EXISTS profiles (
    name VARCHAR(255),
    photo VARCHAR(255),
    scores VARCHAR(25)
);