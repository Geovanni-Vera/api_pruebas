<?php
require "config/database.php";

$nombre = $_POST["producto"];
$descripcion = $_POST["descripcion"];
$precio = $_POST["precio"];
$db = new Database("localhost","productosapi","root","root");
$connect = $db -> connect();
if($connect){
    $query = "INSERT INTO productos (nombre, descripcion, precio) VALUES ('$nombre','$descripcion','$precio');";
    $resultado = $db ->query($query);
    if($resultado){
        header("location: /api_prueba/index.html");
    }
}


