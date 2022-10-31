<?php
require_once('dbconnection.php');

//Una volta ricevuto il file e salvato il suo percorso temporaneo estraiamo i suoi dati
$csvFile = $_FILES;
$percorso = $csvFile['filesfiles']['tmp_name'];
$file = file($percorso);
foreach ($file as $dato) {
    echo $dato . '<br>';
}
var_dump($csvFile);
if (($handle = fopen($percorso, "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ","))) {
        $userName = $data[0];
        $userSurname = $data[1];
        $userAge = $data[2];
        $userEmail = $data[3];
        echo $userEmail . '<br>';
    }
    fclose($handle);
}
