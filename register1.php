<?php
   $servername = "localhost"; 
   $username = "root"; 
   $password = ""; 
   $myDB="users"; 
   $name = $_POST['firstname'];

   $conn = mysqli_connect($servername, $username, $password ,$myDB,3306); 
   if (!$conn) { 
       die("Connection failed: " . mysqli_connect_error()); 
    } 
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $query= "INSERT INTO user VALUES('Yash','$name')";
        if($result =mysqli_query($conn,$query)) 
        { 
            echo "Record Successfully deleted"; 
        } else{ echo "Error in deleting"; }
    }
?>
