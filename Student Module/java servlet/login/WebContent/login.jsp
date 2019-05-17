<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
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
	 	<div class="fadeIn first"><br>
      <center><h1>Student</h1></center>
       </div>
			<div class="imgcontainer">
				<center><img src="images/avatar.png" height="100" width="100" alt="Avatar" class="avatar"></center>
			</div>
		
	<center><form action="StudentLogin" method="post">
	<b>ID Number</b> <br> <input type="text" name="uname" ></center><br>
    <center><a href="http://localhost:8080/login/welcome.jsp"> Login</a></center>
	</form>
</body>
</html>