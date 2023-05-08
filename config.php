<?php
define('DBSERVER', 'localhost');
define('DBUSERNAME', 'root');
define('DBPASSWORD', '');
define('DBNAME', 'mydb');
define('DBPORT', '3306');

$db = mysqli_connect(DBSERVER, DBUSERNAME, DBPASSWORD, DBNAME, DBPORT);

if($db === false){
    die("Error: connection error. " . mysqli_connect_error());
}
?>