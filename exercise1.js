CREATE TABLE IF NOT EXISTS books (
id INTEGER PRIMARY KEY,
name TEXT NOT NULL,
author TEXT NOT NULL, 
genre TEXT,
published_year INT, 
isbn VARCHAR(13),
price DECIMAL(5, 2), 
rating FLOAT, 
stock_count INT)