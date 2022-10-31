<?php
require_once('dbconnection.php');

$sql = "SELECT * FROM users";
$result = $connection->query($sql);
$utenti = [];
$i = 0;
while ($row = mysqli_fetch_assoc($result)) {
    $utenti[$i]['indice'] = $row['id'];
    $utenti[$i]['nome'] = $row['nome'];
    $utenti[$i]['cognome'] = $row['cognome'];
    $utenti[$i]['eta'] = $row['eta'];
    $utenti[$i]['email'] = $row['email'];
    $i++;
}
