<?php 
	require "header.php";
 ?>

	<main>
		<div class="main-wrapper">
		<section class = "main-container">
		<?php
			if (isset($_SESSION['idStaff'])){
				echo '<p class="login-status">User is logged out.</p>';
			}
			else {
				echo '<p class="login-status">User is logged in.</p>';
			}
		?>
		</section>
		</div>
	</main>

<?php 
	require "footer.php";
?>
