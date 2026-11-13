-- Esquema inicial de la base de datos
-- Ejecutar en phpMyAdmin (XAMPP) o con: mysql -u root -p < database/schema.sql

CREATE DATABASE IF NOT EXISTS finalcountdown
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE finalcountdown;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
