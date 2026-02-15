<?php
// audit.php
require 'db.php';
$logs = $pdo->query("SELECT a.*, u.name FROM audit_logs a LEFT JOIN users u ON a.user_id=u.id ORDER BY a.timestamp DESC")->fetchAll(PDO::FETCH_ASSOC);
foreach($logs as $log){
    echo "{$log['timestamp']} - {$log['name']} - {$log['action']}<br>";
}
?>
