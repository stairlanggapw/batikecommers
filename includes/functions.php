<?php
session_start();
require_once '../config/database.php';

class AuthSystem {
    private $db;

    public function __construct() {
        $this->db = new Database();
    }

    // Sanitasi input
    public function sanitizeInput($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    // Validasi email
    public function validateEmail($email) {
        return filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    // Validasi password (minimal 6 karakter)
    public function validatePassword($password) {
        return strlen($password) >= 6;
    }

    // Cek apakah email sudah terdaftar
    public function emailExists($email) {
        $this->db->query('SELECT id FROM users WHERE email = :email');
        $this->db->bind(':email', $email);
        $result = $this->db->single();
        return $result ? true : false;
    }

    // Registrasi user baru
    public function register($nama, $email, $password) {
        // Sanitasi input
        $nama = $this->sanitizeInput($nama);
        $email = $this->sanitizeInput($email);

        // Validasi
        if (empty($nama) || empty($email) || empty($password)) {
            return ['success' => false, 'message' => 'Semua field harus diisi'];
        }

        if (!$this->validateEmail($email)) {
            return ['success' => false, 'message' => 'Format email tidak valid'];
        }

        if (!$this->validatePassword($password)) {
            return ['success' => false, 'message' => 'Password minimal 6 karakter'];
        }

        if ($this->emailExists($email)) {
            return ['success' => false, 'message' => 'Email sudah terdaftar'];
        }

        // Hash password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Insert ke database
        $this->db->query('INSERT INTO users (nama, email, password) VALUES (:nama, :email, :password)');
        $this->db->bind(':nama', $nama);
        $this->db->bind(':email', $email);
        $this->db->bind(':password', $hashedPassword);

        if ($this->db->execute()) {
            return ['success' => true, 'message' => 'Registrasi berhasil'];
        } else {
            return ['success' => false, 'message' => 'Terjadi kesalahan saat registrasi'];
        }
    }

    // Login user
    public function login($email, $password) {
        // Sanitasi input
        $email = $this->sanitizeInput($email);

        // Validasi
        if (empty($email) || empty($password)) {
            return ['success' => false, 'message' => 'Email dan password harus diisi'];
        }

        if (!$this->validateEmail($email)) {
            return ['success' => false, 'message' => 'Format email tidak valid'];
        }

        // Cari user berdasarkan email
        $this->db->query('SELECT * FROM users WHERE email = :email');
        $this->db->bind(':email', $email);
        $user = $this->db->single();

        if ($user && password_verify($password, $user['password'])) {
            // Set session
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_nama'] = $user['nama'];
            $_SESSION['user_email'] = $user['email'];
            $_SESSION['logged_in'] = true;

            return ['success' => true, 'message' => 'Login berhasil', 'user' => $user];
        } else {
            return ['success' => false, 'message' => 'Email atau password salah'];
        }
    }

    // Logout user
    public function logout() {
        session_unset();
        session_destroy();
        return ['success' => true, 'message' => 'Logout berhasil'];
    }

    // Cek apakah user sudah login
    public function isLoggedIn() {
        return isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true;
    }

    // Get user data dari session
    public function getCurrentUser() {
        if ($this->isLoggedIn()) {
            return [
                'id' => $_SESSION['user_id'],
                'nama' => $_SESSION['user_nama'],
                'email' => $_SESSION['user_email']
            ];
        }
        return null;
    }
}

// Generate CSRF Token
function generateCSRFToken() {
    if (!isset($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

// Verify CSRF Token
function verifyCSRFToken($token) {
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}
?>