<?php
include "connection.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Instructor Login Form | iBorrow </title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/animate.min.css" rel="stylesheet">
    <link href="css/custom.min.css" rel="stylesheet">
</head>

<br>

<div class="col-lg-12 text-center ">
    <h1 style="font-family:Arial">iBorrow</h1>
</div>

<br>

<body class="login">

<div class="login_wrapper">

    <section class="login_content">
        <form name="form1" action="" method="post">
            <h1>Instructor Login Form</h1>

            <div>
                <input type="text" name="fac_number" class="form-control" placeholder="Faculty ID" required=""/>
            </div>
            <div>
                <input type="password" name="password" class="form-control" placeholder="Password" required=""/>
            </div>
            <div>

                <input class="btn btn-default submit" type="submit" name="submit1" value="Login">
                <a class="reset_pass" href="#">Lost your password?</a>
            </div>

            
        </form>
    </section>


</div>

<?php
if(isset($_POST["submit1"]))
{

    $count=0;
    $res=mysqli_query($link, "select * from instructor_login where fac_number='$_POST[fac_number]' && password='$_POST[password]'");
    $count=mysqli_num_rows($res);

    if($count==0)
    {
        ?>
        <div class="alert alert-danger col-lg-6 col-lg-push-3">
           Invalid Username or Password.
        </div>
<?php
    }
    else
    {
        ?>
<script type="text/javascript">
    window.location="aa.php";
</script>
<?php
    }
}
?>
        

</body>
</html>
