<?php

	$con = mysqli_connect('127.0.0.1','root','');

	if ( !$con ) {
		echo 'Cannot connect to the server';
	}

	if ( !mysqli_select_db ($con,'teammakder') ) {
		echo 'Database not selected';
	}

	$idno = $_POST['idno'];
	$rem = $_POST['rem'];

	$sql = "UPDATE items SET returnedOn = NOW(), remarks = '$rem' WHERE idNo = '$idno'";

	if ( !mysqli_query ($con,$sql) ) {
		echo "<br><br><p style = 'color: red ; text-align: center ; font-family: sans-serif ; font-size: 35px ;'>".'Failed to Update Item'."</p>";

	} else {
		echo "<br><br><p style = 'color: green ; text-align: center ; font-family: sans-serif ; font-size: 35px ;'>".'Item Successfully Updated'."</p>";
	}

	header("refresh: 2; url = add-item.html");

?>