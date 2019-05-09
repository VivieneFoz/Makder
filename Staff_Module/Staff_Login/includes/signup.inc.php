<?php

if (isset($_POST['submit'])) {
	
	require "dbh.inc.php";

	$uid = $_POST['uid'];
	$email = $_POST['email'];
	$pwd =  $_POST['pwd'];
	$pwdRepeat = mysqli_real_escape_string($conn, $_POST['pwd_repeat']);

	//Error handlers
	//Check for empty fields
	if (empty($uid) || empty($email) || empty($pwd) || empty($pwdRepeat)) {
		header ("Location: ../signup.php?error=emptyfields&uid=".$uid."&mail=".$email);
		exit();
	} else if(!filter_var($email, FILTER_VALIDATE_EMAIL) &&  !preg_match("/^[a-zA-Z]*$/", $uid)){
		header ("Location: ../signup.php?error=invalidmailuid");
		exit();

	} else if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
		header ("Location: ../signup.php?error=invalidmail&uid=".$uid);
		exit();
	} else if(!preg_match("/^[a-zA-Z]*$/", $uid)){
		header ("Location: ../signup.php?error=invaliduid&mail=".$uid);
		exit();
	} else if($pwd !== $pwdRepeat){
		header ("Location: ../signup.php?error=passwordcheck&uid=".$uid."&email=".$email);
		exit();	
	
	} else {
	$sql ="SELECT uidStaff FROM staff WHERE uidStaff=?;";
	$stmt =mysqli_stmt_init($conn);
	if(!mysqli_stmt_prepare($stmt, $sql)){
		header ("Location: ../signup.php?error=sqlerror");
		exit();
	} else {
		mysqli_stmt_bind_param($stmt, "s", $uid);
		mysqli_stmt_execute($stmt);
		mysqli_stmt_store_result($stmt);
		$resultCheck = mysqli_stmt_num_rows($stmt);
		if($resultCheck > 0){
			header ("Location: ../signup.php?error=usertaken&mail=.$email");
			exit();
		}
		else{

			$sql ="INSET INTO staff (uidStaff, emailStaff, pwdStaff) VALUES (?, ?, ?)";
			$stmt =mysqli_stmt_init($conn);
			if(!mysqli_stmt_prepare($stmt, $sql)){
				header ("Location: ../signup.php?error=sqlerror");
				exit();

		} else{
			$hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);


			mysqli_stmt_bind_param($stmt, "sss", $uid, $email, $hashedPwd);
			mysqli_stmt_execute($stmt);
			header ("Location: ../signup.php?signup=success");
			exit();
		}

	
		}
	}

	}
	mysqli_stmt_close($stmt);
	mysqli_close($conn);
}
else{
	header ("Location: ../signup.php");
	exit();
}
