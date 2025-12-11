-- Membuat database user_auth_system
CREATE DATABASE IF NOT EXISTS user_auth_system CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Menggunakan database
USE user_auth_system;

-- Drop tabel jika sudah ada (untuk reset)
DROP TABLE IF EXISTS users;

-- Membuat tabel users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Menambahkan index untuk performa (hanya jika belum ada)
CREATE INDEX idx_email ON users(email);
CREATE INDEX idx_created_at ON users(created_at);

-- Contoh data untuk testing (password: 123456)
INSERT INTO users (nama, email, password) VALUES 
('Test User', 'test@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
('Admin User', 'admin@batik.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi');