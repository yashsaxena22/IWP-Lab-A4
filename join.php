<?php
$servername = "localhost";
$username = "root";
$password = "";
$myDB="users";
$name = $_POST['firstname'];
$email= $_POST['email'];
$pass= $_POST['password'];
$bday= $_POST['date'];
$gender= $_POST['gen'];
$mob= $_POST['mobile'];
$edu= $_POST['Education'];
$pfp= $_POST['myfile'];


$conn = mysqli_connect($servername, $username, $password,$myDB,3306);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO usertable (FullName, Email, Pass, Birthday, Gender, Mobile, Education, Pfp)
VALUES ('$name', '$email', '$pass', '$bday', '$gender', '$mob', '$edu', '$pfp' )";

if (mysqli_query($conn, $sql)) {
  echo '<script> window.location.assign("login.html");</script>';
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
