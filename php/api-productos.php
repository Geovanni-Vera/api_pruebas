<?php

// Conexión a la base de datos
require "config/database.php";
$db = new Database("localhost","productosapi","root","root");
$connect = $db -> connect();
if($connect){
    // Consulta a la tabla de productos
    $query = "SELECT * FROM productos";

    $result = $db->query($query);
    // Arreglo para almacenar los productos
    $productos = array();

    // Almacenar los productos en el arreglo
    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        $productos[] = $row;
    }

    // Enviar los productos como JSON
    header("Content-Type: application/json");
    echo json_encode($productos);
}
