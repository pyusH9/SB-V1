<?php
require 'db.php';

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $role = 'buyer'; // default role

    $stmt = $pdo->prepare("SELECT * FROM users WHERE email=?");
    $stmt->execute([$email]);
    if($stmt->rowCount() > 0){
        echo json_encode(['status'=>'error','message'=>'Email already exists']);
        exit;
    }

    $stmt = $pdo->prepare("INSERT INTO users (name,email,password_hash,role) VALUES (?,?,?,?)");
    $stmt->execute([$name,$email,$password,$role]);
    echo json_encode(['status'=>'success']);
}
?>
