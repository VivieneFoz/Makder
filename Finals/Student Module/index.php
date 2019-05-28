<?php
	include 'dbconfig/config.php';
    session_start();
if (isset($_POST['login'])) {
	$idnum = mysqli_real_escape_string($conn, $_POST['idnum']);
	$result = mysqli_query($conn, "SELECT * FROM login WHERE idnum = '" . $idnum. "'");
	if ($row = mysqli_fetch_array($result)) {
		$_SESSION['idnum'] = $row['idnum'];	
		header("Location: reserve.php");
	} else {
		$error_message = "Incorrect ID Number!!!";
	}
}
?>

<!DOCTYPE html>
<html>
<head>
<title>iBorrow</title>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
        <link rel="stylesheet" type="text/css" href="css/style.css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar navbar-dark bg-primary">
  <a class="navbar-brand" href="#">iBorrow</a>
</nav>
<div id="main-wrapper">
  <div id="formContent">
 <div class="fadeIn first">
      <center><h1>Student</h1></center>
    </div>
			<div class="imgcontainer">
				<img src="imgs/avatar.png" alt="Avatar" class="avatar">
			</div>
		<form action="reserve.php" method="post">
		
			<div class="inner_container">
				<label><b>ID Number</b></label>
                <input type="text" id="id number" class="fadeIn second" name="id number" placeholder="ID Number" required >
				<button class="login_button" name="login" type="submit">Login</button>
			</div>
		</form>
		</div>
		
	</div>
</body>
</html>