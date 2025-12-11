<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require_once '../includes/functions.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

try {
    // Get POST data
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        $input = $_POST;
    }

    $nama = $input['nama'] ?? '';
    $email = $input['email'] ?? '';
    $password = $input['password'] ?? '';
    $confirmPassword = $input['confirm_password'] ?? '';

    // Validasi konfirmasi password
    if ($password !== $confirmPassword) {
        echo json_encode(['success' => false, 'message' => 'Konfirmasi password tidak cocok']);
        exit;
    }

    // Proses registrasi
    $auth = new AuthSystem();
    $result = $auth->register($nama, $email, $password);

    echo json_encode($result);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Terjadi kesalahan server: ' . $e->getMessage()]);
}
?>