-- create database
CREATE DATABASE automoviles;

use automoviles;

-- create table
CREATE TABLE car (
  placa VARCHAR(50) UNSIGNED PRIMARY KEY,
  marca VARCHAR(50) NOT NULL,
  modelo VARCHAR(100) NOT NULL,
  color VARCHAR(15) NOT NULL
);

-- show table
show tables;

--  describe table
describe car;