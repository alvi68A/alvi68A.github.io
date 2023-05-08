<?php

session_start();

if (!isset($_SESSION["userid"])) {
    header("location: login.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Private webserver <?php echo $_SESSION["name"]; ?></title>
        <link rel="stylesheet" href="private.css">
    </head>
    <body>
        <p>
            <h1> Greetings, </h1>
            <h1> you have evidently found my private web server. </h1>
            <h1> &nbsp </h1>
            <h1> Luckily for me, I do not hold my private data in here. </h1>
            <h1> Nevertheless, I reward your effort by giving you my private contact information </h1>
            <h1> &nbsp </h1>
            <h1> Fast-Response email: &nbspalvaraho@proton.me </h1>
            <h1> Phone number: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp+358 40 18 77222 </h1>
            <a href="logout.php" >Log Out</a>
        </p>
    </body>
</html>    