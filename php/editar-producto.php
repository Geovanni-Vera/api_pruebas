<?php
require "config/database.php";

$id = $_POST['id'];
$nombre = $_POST["producto"];
$descripcion = $_POST["descripcion"];
$precio = $_POST["precio"];

$db = new Database("localhost","productosapi","root","root");
$connect = $db -> connect();


if($connect){
    $query = "UPDATE productos SET nombre = '$nombre', descripcion = '$descripcion', precio = '$precio' WHERE id = '$id'";
    $resultado = $db ->query($query);
    if($resultado){
        header("location: /api_pruebas/index.html");
    }
}
