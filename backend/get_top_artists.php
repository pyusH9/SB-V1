<?php
require 'db.php';
$topArtists = $pdo->query("SELECT name, role, kyc_status, profile_pic, short_bio 
                           FROM users 
                           WHERE kyc_status='approved' 
                           ORDER BY created_at DESC 
                           LIMIT 6")->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($topArtists);
?>
