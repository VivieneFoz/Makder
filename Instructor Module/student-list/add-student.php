<?php

	$con = mysqli_connect('127.0.0.1','root','');

	if ( !$con ) {
		echo 'Cannot connect to the server';
	}

	if ( !mysqli_select_db ( $con, 'additem') ) {
		echo 'Database not selected';
	}

	$code = $_POST['code'];
	$idno = $_POST['idno'];
	$name = $_POST['name'];

	$sql = "INSERT INTO classes (classCode, idno, studName) VALUES ('$code','$idno','$name')";

	if ( !mysqli_query($con, $sql) ) {
		echo "<br><br><p style = 'color: red ; text-align: center ; font-family: sans-serif ; font-size: 35px ;'>".'Failed to Add Student'."</p>";

	} else {
		echo "<br><br><p style = 'color: green ; text-align: center ; font-family: sans-serif ; font-size: 35px ;'>".'Student Successfully Added'."</p>";
	}

	header("refresh: 3; url = add-class.html");

?>