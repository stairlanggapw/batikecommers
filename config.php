<?php

echo "<!DOCTYPE html>
<html lang='id'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Configuration Check - User Auth System</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; }
        .success { color: #28a745; background: #d4edda; padding: 10px; border-radius: 5px; margin: 10px 0; }
        .error { color: #dc3545; background: #f8d7da; padding: 10px; border-radius: 5px; margin: 10px 0; }
        .warning { color: #856404; background: #fff3cd; padding: 10px; border-radius: 5px; margin: 10px 0; }
        .info { color: #0c5460; background: #d1ecf1; padding: 10px; border-radius: 5px; margin: 10px 0; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
        .check-item { margin: 15px 0; padding: 10px; border-left: 4px solid #007bff; background: #f8f9fa; }
    </style>
</head>
<body>";

echo "<h1>🔍 Configuration Check</h1>";

$errors = 0;
$warnings = 0;

// Check PHP Version
echo "<div class='check-item'>";
echo "<h3>PHP Version Check</h3>";
if (version_compare(PHP_VERSION, '7.4.0', '>=')) {
    echo "<div class='success'>✅ PHP Version: " . PHP_VERSION . " (OK)</div>";
} else {
    echo "<div class='error'>❌ PHP Version: " . PHP_VERSION . " (Minimum required: 7.4.0)</div>";
    $errors++;
}
echo "</div>";

// Check Required Extensions
echo "<div class='check-item'>";
echo "<h3>Required PHP Extensions</h3>";

$required_extensions = ['pdo', 'pdo_mysql', 'json', 'session'];
foreach ($required_extensions as $ext) {
    if (extension_loaded($ext)) {
        echo "<div class='success'>✅ $ext extension: Loaded</div>";
    } else {
        echo "<div class='error'>❌ $ext extension: Not loaded</div>";
        $errors++;
    }
}
echo "</div>";

// Check File Permissions
echo "<div class='check-item'>";
echo "<h3>File Structure Check</h3>";

$required_files = [
    'config/database.php' => 'Database configuration',
    'includes/functions.php' => 'Core functions',
    'api/login.php' => 'Login API',
    'api/register.php' => 'Register API',
    'api/logout.php' => 'Logout API',
    'index.html' => 'Main page',
    'dashboard.php' => 'Dashboard page',
    'assets/css/style.css' => 'Main stylesheet',
    'assets/js/auth.js' => 'Authentication JavaScript'
];

foreach ($required_files as $file => $description) {
    if (file_exists($file)) {
        if (is_readable($file)) {
            echo "<div class='success'>✅ $file: Exists and readable</div>";
        } else {
            echo "<div class='warning'>⚠️ $file: Exists but not readable</div>";
            $warnings++;
        }
    } else {
        echo "<div class='error'>❌ $file: Missing ($description)</div>";
        $errors++;
    }
}
echo "</div>";

// Check Database Connection
echo "<div class='check-item'>";
echo "<h3>Database Connection Check</h3>";

if (file_exists('config/database.php')) {
    try {
        require_once 'config/database.php';
        
        $db = new Database();
        echo "<div class='success'>✅ Database connection: Successful</div>";
        
        // Check if users table exists
        $db->query("SHOW TABLES LIKE 'users'");
        $result = $db->single();
        
        if ($result) {
            echo "<div class='success'>✅ Users table: Exists</div>";
            
            // Check table structure
            $db->query("DESCRIBE users");
            $columns = $db->resultset();
            
            echo "<h4>Table Structure:</h4>";
            echo "<table>";
            echo "<tr><th>Field</th><th>Type</th><th>Null</th><th>Key</th><th>Default</th></tr>";
            foreach ($columns as $column) {
                echo "<tr>";
                echo "<td>" . $column['Field'] . "</td>";
                echo "<td>" . $column['Type'] . "</td>";
                echo "<td>" . $column['Null'] . "</td>";
                echo "<td>" . $column['Key'] . "</td>";
                echo "<td>" . ($column['Default'] ?? 'NULL') . "</td>";
                echo "</tr>";
            }
            echo "</table>";
            
        } else {
            echo "<div class='error'>❌ Users table: Not found</div>";
            $errors++;
        }
        
    } catch (Exception $e) {
        echo "<div class='error'>❌ Database connection failed: " . $e->getMessage() . "</div>";
        $errors++;
    }
} else {
    echo "<div class='error'>❌ Database config file not found</div>";
    $errors++;
}
echo "</div>";

// Check Session Configuration
echo "<div class='check-item'>";
echo "<h3>Session Configuration</h3>";

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (session_status() === PHP_SESSION_ACTIVE) {
    echo "<div class='success'>✅ Sessions: Working</div>";
    echo "<div class='info'>Session ID: " . session_id() . "</div>";
} else {
    echo "<div class='error'>❌ Sessions: Not working</div>";
    $errors++;
}
echo "</div>";

// Summary
echo "<div class='check-item'>";
echo "<h3>📊 Summary</h3>";

if ($errors === 0 && $warnings === 0) {
    echo "<div class='success'>";
    echo "<h2>🎉 All checks passed!</h2>";
    echo "<p>Your system is ready to use. You can now:</p>";
    echo "<ul>";
    echo "<li><a href='index.html'>Open the application</a></li>";
    echo "<li>Register a new user account</li>";
    echo "<li>Test the login functionality</li>";
    echo "</ul>";
    echo "</div>";
} else {
    if ($errors > 0) {
        echo "<div class='error'>";
        echo "<h2>❌ $errors Error(s) Found</h2>";
        echo "<p>Please fix the errors above before using the system.</p>";
        echo "</div>";
    }
    
    if ($warnings > 0) {
        echo "<div class='warning'>";
        echo "<h2>⚠️ $warnings Warning(s) Found</h2>";
        echo "<p>The system may work, but you should address these warnings.</p>";
        echo "</div>";
    }
}

echo "<div class='info'>";
echo "<h3>🛠️ Troubleshooting Tips:</h3>";
echo "<ul>";
echo "<li>If database connection fails, check your MySQL server and credentials in config/database.php</li>";
echo "<li>If files are missing, make sure you uploaded all files correctly</li>";
echo "<li>If permissions are wrong, set folders to 755 and files to 644</li>";
echo "<li>If sessions don't work, check your PHP session configuration</li>";
echo "</ul>";
echo "</div>";

echo "</div>";

echo "</body></html>";
?>