--Creating SQL DATABASE for Burgers--

DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

CREATE TABLE burgers 
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

SELECT * FROM burgers; 







-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.