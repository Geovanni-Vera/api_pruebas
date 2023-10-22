<?php

// Conexión a la base de datos
$host = "localhost";
$dbname = "productosapi"; // Cambia a tu nombre de BD
$user = "root"; // Cambia a tu usuario
$pass = "root"; // Cambia a tu contraseña

try {
    $conexion = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
    exit;
}

// Consulta a la tabla de productos
$query = $conexion->query("SELECT * FROM productos");

// Arreglo para almacenar los productos
$productos = array();

// Almacenar los productos en el arreglo
while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
    $productos[] = $row;
}

// Enviar los productos como JSON
header("Content-Type: application/json");
echo json_encode($productos);
?>