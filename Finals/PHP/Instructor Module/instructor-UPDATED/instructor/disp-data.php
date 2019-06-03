<html>
<head>
	<link rel = "icon" href = "../instructor/images/icons/view.ico">

	<title> View Classes | iBORROW </title>

	<meta charset = "UTF-8">
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
    
    <link rel = "stylesheet" type = "text/css" href = "https://www.w3schools.com/w3css/4/w3.css">
	<link rel = "stylesheet" type = "text/css" href = "https://fonts.googleapis.com/css?family=Raleway">
	<link href = "https://www.1001freefonts.com/calligraphy-fonts.php">
	<link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

	<link rel = "stylesheet" type = "text/css" href = "../instructor/CSS/student.css">

	<style type = 'text/css'>
		table {
			border: 8px solid blue;
			background-color: #FFC;

			bottom: 0;
			width: 100%;
			color: black;
			height: 3rem;
			font-size: 13px;
			padding-top: 30px;
			position: relative;
			text-align: center;
			padding-bottom: 100px;
		}

		th {
			font-size: 30;
			font-family: 'Raleway';
			border-bottom: 10px solid #000;
		}

		td {
			font-size: 17;
			border-bottom: 2px solid #666;
		}

		.SPAN {
			font-size: 65px;
			font-family: 'Raleway';
			text-shadow: 2px 7px 9px #000000;
		}
	</style>
</head>

<body class = "w3-center">
	<br> <br>
	<a href = "../instructor/add-student.html#top" class = "w3-button w3-hover-orange">
		<i class = "fa fa-arrow-left w3-margin-right w3-wide"></i> GO BACK 
	</a>

	<br> <br>
	<!-- <span class = "SPAN w3-animate-opacity w3-wide"><b> &lt i B O R R O W &gt </b></span> -->
	<p class = "w3-xlarge w3-wide"> - List &nbspof &nbspNSTP &nbspStudents - </p>
	<br> <br>

	<?php
	include('connect-mysql.php');

	$sqlget = "SELECT * FROM classes";
	$sqldata = mysqli_query($dbcon, $sqlget) or die('error getting data');

	echo "<table>";
	echo "<tr>
			<th> &nbsp Class Code &nbsp</th>
			<th> &nbsp ID # &nbsp</th>
			<th> Student Name </th>
			</tr>";

	while ($row = mysqli_fetch_array($sqldata, MYSQLI_ASSOC)) {
		echo "<tr><td>";
			echo $row['classCode'];
		echo "</td><td>";
			echo $row['idno'];
		echo "</td><td> &nbsp &nbsp &nbsp &nbsp";
			echo $row['studName'];
		echo "</td></tr>";
	}

	echo "</table>";
	?>
</body>
</html>