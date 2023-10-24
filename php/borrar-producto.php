<?php
require "config/database.php";
$db = new Database("localhost","productosapi","root","root");
$connect = $db -> connect();
$id = $_GET['id'];


if($connect){
    $query = "DELETE FROM productos WHERE id = '$id'";
    $resultado = $db ->query($query);
    if($resultado){
        header("location: /api_pruebas/index.html");
    }
}
