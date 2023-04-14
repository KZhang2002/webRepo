CREATE DATABASE IF NOT EXISTS DBUI;
USE DBUI;
DROP TABLE IF EXISTS user;
CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    pass VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    snowflake DATETIME NOT NULL DEFAULT NOW()
);
DROP TABLE IF EXISTS listing;
CREATE TABLE IF NOT EXISTS listing (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    price FLOAT(10,2),
    created DATETIME NOT NULL DEFAULT NOW(),
    seller INT NOT NULL REFERENCES user(id),
    item_description VARCHAR(6969),
    imagelink VARCHAR(255)
);
DROP TABLE IF EXISTS bid;
CREATE TABLE IF NOT EXISTS bid (
    id INT AUTO_INCREMENT PRIMARY KEY,
    listing INT NOT NULL REFERENCES listing(id),
    bidder INT NOT NULL REFERENCES user(id),
    bid FLOAT NOT NULL,
    snowflake DATETIME NOT NULL DEFAULT NOW()
);
DROP TABLE IF EXISTS review;
CREATE TABLE IF NOT EXISTS review (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user INT NOT NULL REFERENCES user(id),
    review VARCHAR(255) NOT NULL,
    seller INT REFERENCES user(id),
    snowflake DATETIME NOT NULL DEFAULT NOW()
);
DROP TABLE IF EXISTS tag;
CREATE TABLE IF NOT EXISTS tag (
    listing INT REFERENCES listing(ID),
    tag_name VARCHAR(255),
    PRIMARY KEY (listing, tag_name)
);
