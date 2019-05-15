<?php

	$con = mysqli_connect('127.0.0.1','root','');

	if(!$con)
	{
		echo 'Not connect to the server';
	}

	if(!mysqli_select_db($con,'additem'))
	{
		echo 'Database not selected';
	}

	$grpno = $_POST['grpno'];
	$idno = $_POST['idno'];
	$name = $_POST['name'];
	$itemname = $_POST['itemname'];
	$qnty = $_POST['qnty'];

	$sql = "INSERT INTO item (groupNo, idNo, borrowersName, item, qnty, borrowedOn) VALUES ('$grpno','$idno','$name','$itemname','$qnty',NOW())";

	if(!mysqli_query($con,$sql))
	{
		echo "<p style = 'color: red ; text-align: center ; font-family: sans-serif ; font-size: 35px ;'>".'Failed to Add Item'."</p>";
	}
	else
	{
		echo "<br><br><p style = 'color: green ; text-align: center ; font-family: sans-serif ; font-size: 35px ;'>".'Item Successfully Added'."</p>";
	}

	header("refresh:5; url=add-item.html");

?>