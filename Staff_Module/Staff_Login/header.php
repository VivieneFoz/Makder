<?php
	session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Login System</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	
	<header id="header" class="">
		<nav>
			<ul>
		<li><a href="index.php">
				Home
			</a></li>
			</ul>
			<div class="nav-login">
			<?php
			if (isset($_SESSION['idStaff'])){
				echo '<form action="includes/logout.inc.php" method="post">
				<button type="submit" name="logout-submit">Logout</button>
			</form>';
			}
			else {
				echo '<form action="includes/login.inc.php" method="post">
				<input type="text" name="mailuid" placeholder="Username/Email">
				<input type="pwd" name="pwd" placeholder="Password">
				<button type="submit" name="login-submit">Login</button>
			</form>
			<a href="signup.php" class="header-signup">Signup</a>
			<button type="submit" name="logout-submit">Logout</button>';
		}

			?>
			

			</div>
		</nav>
	</header>