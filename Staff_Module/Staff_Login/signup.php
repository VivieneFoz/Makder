<?php 
	require "header.php";
 ?>
	<main>
	<section class="main-container">
		<div class="main-wrapper">
			<h1>Signup</h1>
			<form class="form-signup" action="includes/signup.inc.php" method="POST">
				<input type="text" name="uid" placeholder="Username">
				<input type="text" name="email" placeholder="Email">
				<input type="password" name="pwd" placeholder="Password">
				<input type="password" name="pwd_repeat" placeholder="Repeat password">
				<button type="submit" name="submit">Sign up</button>
			</form>
		</div>
	</section>
	</main>

<?php 
	require "footer.php";
?>
