CREATE DATABASE IF NOT EXISTS analysis_results;

GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' WITH GRANT OPTION;

CREATE USER IF NOT EXISTS 'spark'@'localhost' IDENTIFIED BY 'P18YtrJj8q6ioevT';
GRANT ALL PRIVILEGES ON *.* TO 'spark'@'localhost' WITH GRANT OPTION;
CREATE USER IF NOT EXISTS 'spark'@'%' IDENTIFIED BY 'P18YtrJj8q6ioevT';
GRANT ALL PRIVILEGES ON *.* TO 'spark'@'%' WITH GRANT OPTION;

CREATE USER IF NOT EXISTS 'client'@'localhost' IDENTIFIED BY 'H8IAQzX236eu5Ep0';
GRANT SELECT ON *.* TO 'client'@'localhost';
CREATE USER IF NOT EXISTS 'client'@'%' IDENTIFIED BY 'H8IAQzX236eu5Ep0';
GRANT SELECT ON *.* TO 'client'@'%';

FLUSH PRIVILEGES;