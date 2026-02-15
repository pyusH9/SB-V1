<?php
session_start();
require 'db.php';

if(!isset($_SESSION['user_id'])){
    echo json_encode(['status'=>'error','message'=>'Not logged in']);
    exit;
}

$user_id = $_SESSION['user_id'];

if($_SERVER['REQUEST_METHOD']==='POST'){
    $action = $_POST['action'];

    if($action === 'switch_role'){
        $new_role = $_POST['role'];
        $stmt = $pdo->prepare("UPDATE users SET role=? WHERE id=?");
        $stmt->execute([$new_role,$user_id]);
        $_SESSION['role'] = $new_role;
        echo json_encode(['status'=>'success']);
    }
}
?>
