<?php
$servername = "localhost";
$username = "root"; // Cambia esto según tu configuración
$password = "admin"; // Cambia esto según tu configuración
$dbname = "gestion_registros";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>