<?php
require_once 'includes/functions.php';

$auth = new AuthSystem();

// Cek apakah user sudah login
if (!$auth->isLoggedIn()) {
    header('Location: index.html');
    exit;
}

$user = $auth->getCurrentUser();
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - User Auth System</title>
    <link rel="stylesheet" href="assets/css/dashboard.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <div class="dashboard-container">
        <!-- Header -->
        <header class="dashboard-header">
            <div class="header-content">
                <h1><i class="fas fa-tachometer-alt"></i> Dashboard</h1>
                <div class="user-info">
                    <span class="welcome-text">Selamat datang, <strong><?php echo htmlspecialchars($user['nama']); ?></strong></span>
                    <button id="logoutBtn" class="logout-btn">
                        <i class="fas fa-sign-out-alt"></i> Logout
                    </button>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="dashboard-main">
            <div class="dashboard-content">
                <!-- Welcome Card -->
                <div class="card welcome-card">
                    <div class="card-header">
                        <h2><i class="fas fa-user-circle"></i> Profil Pengguna</h2>
                    </div>
                    <div class="card-body">
                        <div class="profile-info">
                            <div class="profile-item">
                                <label>Nama Lengkap:</label>
                                <span><?php echo htmlspecialchars($user['nama']); ?></span>
                            </div>
                            <div class="profile-item">
                                <label>Email:</label>
                                <span><?php echo htmlspecialchars($user['email']); ?></span>
                            </div>
                            <div class="profile-item">
                                <label>User ID:</label>
                                <span>#<?php echo $user['id']; ?></span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Stats Cards -->
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-icon">
                            <i class="fas fa-calendar-check"></i>
                        </div>
                        <div class="stat-content">
                            <h3>Login Berhasil</h3>
                            <p>Anda berhasil masuk ke sistem</p>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-icon">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <div class="stat-content">
                            <h3>Akun Aman</h3>
                            <p>Password ter-enkripsi dengan aman</p>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-icon">
                            <i class="fas fa-database"></i>
                        </div>
                        <div class="stat-content">
                            <h3>Database Aktif</h3>
                            <p>Terhubung dengan phpMyAdmin</p>
                        </div>
                    </div>
                </div>

                <!-- Features Card -->
                <div class="card features-card">
                    <div class="card-header">
                        <h2><i class="fas fa-cogs"></i> Fitur Sistem</h2>
                    </div>
                    <div class="card-body">
                        <div class="features-grid">
                            <div class="feature-item">
                                <i class="fas fa-user-plus"></i>
                                <h4>Registrasi User</h4>
                                <p>Sistem registrasi dengan validasi email dan password</p>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-lock"></i>
                                <h4>Login Aman</h4>
                                <p>Autentikasi dengan password hashing</p>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-session"></i>
                                <h4>Session Management</h4>
                                <p>Pengelolaan sesi user yang aman</p>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-database"></i>
                                <h4>Database MySQL</h4>
                                <p>Integrasi dengan phpMyAdmin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer class="dashboard-footer">
            <p>&copy; 2024 User Auth System. Dibuat dengan PHP & MySQL.</p>
        </footer>
    </div>

    <!-- Loading Spinner -->
    <div id="loadingSpinner" class="loading-spinner" style="display: none;">
        <div class="spinner"></div>
    </div>

    <script>
        // Logout functionality
        document.getElementById('logoutBtn').addEventListener('click', async function() {
            if (confirm('Apakah Anda yakin ingin logout?')) {
                document.getElementById('loadingSpinner').style.display = 'flex';
                
                try {
                    const response = await fetch('api/logout.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });

                    const result = await response.json();
                    
                    if (result.success) {
                        window.location.href = result.redirect || 'index.html';
                    } else {
                        alert('Terjadi kesalahan saat logout');
                    }
                } catch (error) {
                    alert('Terjadi kesalahan: ' + error.message);
                } finally {
                    document.getElementById('loadingSpinner').style.display = 'none';
                }
            }
        });

        // Add some interactive effects
        document.querySelectorAll('.stat-card, .feature-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    </script>
</body>
</html>