<?php
?>

<!DOCTYPE html>
<html>
<head>
	<title>iBorrow</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body style="background-color:#b3f1ef">
	<div id="wrapper">
		<center><h2>Login Form</h2></center>
		<center><img src="img/images.jpg" class="avatar"/></center>

	<form class="iBorrow" action="index.php" method="post">
		<br>
		<label><b>Username</b></label>
		<br>
		 <input type="text" class="inputvalues" placeholder="Type your Username/">
		 <br>
		<label><b>Password</b></label>
		<br>
		 <input type="Password" class="inputvalues" placeholder="Type your Password/"><br>
		<label><b>Confirm Password</b></label>
		<br>
		 <input type="Password" class="inputvalues" placeholder="Confirm Password/"><br>
		 <input type="submit" id="signup-btn" value="Sign up">
		 <input type="button" id="back-btn" value="Back">
</body>
</html>