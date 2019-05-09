<?php

if (isset($_POST['login-submit'])){

	require 'dbh.inc.php';

	$mailuid = $_POST['mailuid'];
	$pwd = $_POST['pwd'];

	if(empty($mailuid) || empty($pwd)){
		header ("Location: ../index.php?error=emptyfields");
		exit();
	} else{
		$sql ="SELECT * FROM staff WHERE uidStaff=? OR emailStaff=?;";
		$stmt =mysqli_stmt_init($conn);
		if(!mysqli_stmt_prepare($stmt, $sql)){
			header ("Location: ../index.php?error=sqlerror");
	exit();	
		} else{

			mysqli_stmt_bind_param($stmt, "ss", $mailuid, $mailuid);
			mysqli_stmt_execute($stmt);
			$result = mysqli_stmt_get_result($stmt);
			if ($row = mysqli_fetch_assoc($result)){
				$pwdCheck = password_verify($pwd, $row['pwdStaff']);
				if($pwdCheck == false){
					header ("Location: ../index.php?error=wrongpwd");
					exit();
				} else if ($pwdCheck == true){
					session_start();
					$_SESSION['staffId'] = $row['idStaff'];
					$_SESSION['staffUid'] = $row['uidStaff'];

					header ("Location: ../index.php?login=success");
					exit();
				} else{
					header ("Location: ../index.php?error=wrongpwd");
					exit();
				}
			}
			else{
				header ("Location: ../index.php?error=nouser");
				exit();
			}

		}
	}

} else{
	header ("Location: ../index.php");
	exit();
}