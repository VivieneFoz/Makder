<html>
<head>
	<link rel = "icon" href = "../student-list/images/icons/view.ico">

	<title> View Classes | iBORROW </title>

	<link rel = "stylesheet" type="text/css" href = "https://fonts.googleapis.com/css?family=Raleway">
	<link rel = "stylesheet" type="text/css" href = "https://www.w3schools.com/w3css/4/w3.css">

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
	<span class = "SPAN w3-animate-opacity w3-wide"><b> &lt i B O R R O W &gt </span></b>
	<br> <br> <br>
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