<?php
ob_start();
session_start();
if(isset($_SESSION['staff_id'])) {
	session_destroy();
	unset($_SESSION['staff_id']);
	unset($_SESSION['staff_name']);
	header("Location: index.php");
} else {
	header("Location: index.php");
}
?>