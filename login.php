<?php

require_once "config.php";
require_once "session.php";

$error = '';
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) {
    
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);


    if (empty($username)) {
        $error .= '<p class="error">please enter username.</p>';
        die("empty");
    }
    if (empty($password)) {
        $error .= '<p class="error">please enter username.</p>';
        die("empty");
    }

    if (empty($error)) {
            $sql = "SELECT * FROM users WHERE username = '$username'";
            $result = mysqli_query($db, $sql);
            $row = $result->fetch_row();

            if ($row) { 
                if (hash("sha256", $password) == $row[2]) {
                    $_SESSION["userid"] = $row[0];
                    $_SESSION["name"] = $row[1];

                    header("location: welcome.php");
                    exit;
                } else {
                    $error .= '<p class="error">The password is not valid.</p>';
                }
            }else {
                $error .= '<p class="error">No User exist with that username.</p>';
            }
        }
    mysqli_close($db);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="webserver.css">
  <title>Desktop</title>
</head>
<body>
<div class="container">
  <div class="menu">
    <div class="button red"></div>
    <div class="button yellow"></div>
    <div class="button green"></div>
    <div class="title">
      <h1>Web Browser</h1>
    </div>
  </div>

  <!-- Duplicate menu -->
  <div class="menu duplicate">
    <div class="title duplicate">
      <h1>File &nbspEdit &nbspView &nbspSearch &nbspBookmarks &nbspHelp</h1>
    </div>
  </div>

    <div class="menu triplicate">
        <img src="icons/back.png" id="backphoto">
        <img src="icons/back.png" id="frontphoto">
        <img src="icons/reload.png" id="reloadphoto">
        <div class="title triplicate">
                <p5>10.0.2.124</p5><p6>:5500/webserver.html</p6>
            </div>
    </div>

  <div id="app">
    <div class="login">
    <?php echo $error; ?>
    <form action="" method="post">
        <label1>Alvi DB Login</label1>
        <p> hello </p>
        <br></br>
        <label2>User Name</label2>
        <input type="text" name="username" placeholder="Username">
        <label2>Password</label2>
        <input type="password" name="password" placeholder="Password">
        <input type="submit" name="submit" value="Submit">
        

    </form>

      </div>
</div>
      
  </div>

<script src="webserver.js"></script>  

</body>
</html>
