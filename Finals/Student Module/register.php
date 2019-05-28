<?php 
ob_start();
include_once("dbconfig/config.php");
session_start();
if(isset($_SESSION['staff_id'])) {
	header("Location: index.php");
}
$error = false;
if (isset($_POST['signup'])) {
	$idnum = mysqli_real_escape_string($conn, $_POST['idnum']);
	$fname = mysqli_real_escape_string($conn, $_POST['fname']);
    $lname = mysqli_real_escape_string($conn, $_POST['lname']);
	if (!preg_match("/^[0-9 ]+$/",$idnum)) {
		$error = true;
		$idnum_error = "ID Number must contain Numbers only!!!!";
	}
	if(strlen($idnum) > 7) {
		$error = true;
		$idnum_error = "ID Number must contain 7 numbers ONLY!!!";
	}
    if (!preg_match("/^[a-zA-Z]+$/",$fname)) {
		$error = true;
		$fname_error = "First Name must contain letters ONLY!!!";
	}
    if (!preg_match("/^[a-zA-Z]+$/",$lname)) {
		$error = true;
		$lname_error = "Last Name must contain letters ONLY!!!";
	}
	if (!$error) {
		if(mysqli_query($conn, "INSERT INTO login(idnum, fname, lname) VALUES('" . $idnum . "', '" . $fname . "', '" . $lname . "')")) {
			$success_message = "Successfully Registered! <a href='login.php'>Click here to Login</a>";
		} else {
			$error_message = "Error in registering...Please try again later!";
		}
	}
}
?>
<script type="text/javascript" src="script/ajax.js"></script>

<div class="container">
	<div class="row">
		<div class="col-md-4 col-md-offset-4 well">
			<form role="form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" name="signupform">
				<fieldset>
					<legend>Sign Up</legend>

					<div class="form-group">
						<label for="name">ID Number</label>
						<input type="text" name="ID Number" placeholder="Enter ID Number" required value="<?php if($error) echo $idnum; ?>" class="form-control" />
						<span class="text-danger"><?php if (isset($idnum_error)) echo $idnum_error; ?></span>
					</div>
					
					<div class="form-group">
						<label for="name">Email</label>
						<input type="text" name="email" placeholder="Email" required value="<?php if($error) echo $email; ?>" class="form-control" />
						<span class="text-danger"><?php if (isset($email_error)) echo $email_error; ?></span>
					</div>

					<div class="form-group">
						<label for="name">Password</label>
						<input type="password" name="password" placeholder="Password" required class="form-control" />
						<span class="text-danger"><?php if (isset($password_error)) echo $password_error; ?></span>
					</div>

					<div class="form-group">
						<label for="name">Confirm Password</label>
						<input type="password" name="rpassword" placeholder="Confirm Password" required class="form-control" />
						<span class="text-danger"><?php if (isset($rpassword_error)) echo $rpassword_error; ?></span>
					</div>

					<div class="form-group">
						<input type="submit" name="signup" value="Sign Up" class="btn btn-primary" />
					</div>
				</fieldset>
			</form>
			<span class="text-success"><?php if (isset($success_message)) { echo $success_message; } ?></span>
			<span class="text-danger"><?php if (isset($error_message)) { echo $error_message; } ?></span>
		</div>
	</div>
	<div class="row">
		<div class="col-md-4 col-md-offset-4 text-center">	
		Already Registered? <a href="login.php">Login Here</a>
		</div>
	</div>	
</div>