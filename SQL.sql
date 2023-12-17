-- SQL syntax for creating a table in the database
CREATE TABLE IF NOT EXISTS user_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);
