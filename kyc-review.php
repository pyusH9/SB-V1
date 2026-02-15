<?php
// kyc-review.php
require 'db.php';
$kyc_requests = $pdo->query("SELECT k.id as kyc_id, u.name, u.email, k.id_doc_path, k.selfie_path
                             FROM kyc_documents k JOIN users u ON k.user_id=u.id
                             WHERE u.kyc_status='pending'")->fetchAll(PDO::FETCH_ASSOC);

foreach($kyc_requests as $req){
    echo "User: {$req['name']} ({$req['email']})<br>";
    echo "ID Doc: <a href='{$req['id_doc_path']}' target='_blank'>View</a><br>";
    echo "Selfie: <a href='{$req['selfie_path']}' target='_blank'>View</a><br>";
    echo "<a href='approve.php?id={$req['kyc_id']}'>Approve</a> | <a href='reject.php?id={$req['kyc_id']}'>Reject</a><hr>";
}
?>
