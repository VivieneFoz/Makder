<html>

<head>
	<link rel = "stylesheet" type = "text/css" href = "https://www.w3schools.com/w3css/4/w3.css">
	<link rel = "stylesheet" type = "text/css" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<?php

	$con = mysqli_connect('127.0.0.1','root','');

	if ( !$con ) {
		echo 'Cannot connect to the server';
	}

	if ( !mysqli_select_db ( $con, 'teammakder') ) {
		echo 'Database not selected';
	}

	$idno = $_POST['idno'];
	$login = $_POST['login'];
	$passwd = $_POST['passwd'];

	$sql = "INSERT INTO adviserlogin (teacherid, username, password) VALUES ('$idno','$login','$passwd')";

	if ( !mysqli_query($con, $sql) ) {
		echo "<br><br><p style = 'color: red ; text-align: center ; font-family: sans-serif ; font-size: 35px ;'>".'Failed to Log In'."</p>";

	} else {
		echo "<br><br><p style = 'color: red ; text-align: center ; font-family: sans-serif ; font-size: 35px ;'>".'PLEASE WAIT'."</p><br><center><i class = 'fa fa-gear fa-spin w3-jumbo'></i></center>";
	}

	header("refresh: 3; url = instructor-hp.html");

?>

</html>