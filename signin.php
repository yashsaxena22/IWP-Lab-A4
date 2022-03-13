<?php
$servername = "localhost";
$username = "root";
$password = "";
$myDB="users";

$email= $_POST['email'];
$pass= $_POST['password'];


$conn = mysqli_connect($servername, $username, $password,$myDB,3306);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * from usertable WHERE email='$email'";
$qu= mysqli_query($conn, $sql);

if (mysqli_query($conn, $sql)) {
  if( mysqli_num_rows($qu)!=0){
      if($isValid= mysqli_query($conn, "SELECT * FROM usertable where email='$email' AND Pass='$pass' ")){
          if( mysqli_num_rows($isValid)==0){
            echo '<script>alert("Wrong Password Entered!"); window.location.assign("login.html");</script>';
          }
          else{
            header("Location: /A4/article.html");
          }
        
      }
  }
  else{
    echo '<script>alert("Wrong Email Entered!"); window.location.assign("login.html");</script>';
    
    

  }
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>