<?php
// approve.php
require 'db.php';
$kyc_id = $_GET['id'];

// Fetch user ID
$stmt = $pdo->prepare("SELECT user_id FROM kyc_documents WHERE id=?");
$stmt->execute([$kyc_id]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);
$user_id = $user['user_id'];

// Update KYC status
$pdo->prepare("UPDATE users SET kyc_status='approved' WHERE id=?")->execute([$user_id]);

// Add to audit logs
$pdo->prepare("INSERT INTO audit_logs (user_id, action) VALUES (?,?)")
    ->execute([$user_id, 'KYC approved']);

header('Location: kyc-review.php');
?>
