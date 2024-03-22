<?php

$name=$_POST['name'];
$phno=$_POST['phno'];
$email=$_POST['email'];
$message=$_POST['message'];

$con=mysqli_connect ("localhost","root","","moviebook");

$sql="INSERT INTO new(name, phno, email, message) values('$name','$phno','$email', '$message')";
$r = mysqli_query($con,$sql);

if($r)
{
  echo "Thanks for your message";
}

else 
{
  echo "Message Failed";
}

?>