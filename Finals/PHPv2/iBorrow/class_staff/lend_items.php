<?php
session_start();
include "header.php";
include "connection.php";
?>

        <div class="right_col" role="main">
            <div class="">
                <div class="page-title">
                    <div class="title_left">
                        <h3>iBorrow | Class Staff</h3>
                    </div>

                    <div class="title_right">
                        <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search for...">
                    <span class="input-group-btn">
                      <button class="btn btn-default" type="button">Go!</button>
                    </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="clearfix"></div>
                <div class="row" style="min-height:500px">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="x_panel">
                            <div class="x_title">
                                <h2>Lend Items</h2>

                                <div class="clearfix"></div>
                            </div>
                            <div class="x_content">
                            <form name="form1" action="" method="post">
                                <table>
                                    <tr>
                                        <td>
                                            <select name="enr" class="form-control selectpicker">
                                                <?php
                                                    $res=mysqli_query($link, "select id_number from student_login");
                                                    while($row=mysqli_fetch_array($res))
                                                    {
                                                        echo "<option>";
                                                        echo $row["id_number"];
                                                        echo "</option>";
                                                    }
                                                ?>
                                            </select>
                                        </td>
                                        <td> 
                                            <input type="submit"  name="submit1" class="form-control btn btn-default submit" value="Search" style="margin-top: 5px;">
                                        </td>
                                    </tr>
                                </table>

                                <?php
                                if(isset($_POST["submit1"]))
                                {
                                   $res5=mysqli_query($link, "select * from student_login where id_number='$_POST[enr]'");
                                   while($row5=mysqli_fetch_array($res5))
                                   {
                                       $first_name=$row5["first_name"];
                                       $last_name=$row5["last_name"];
                                       $group_number=$row5["group_number"];
                                       $class_code=$row5["class_code"];
                                       $contact=$row5["contact"];
                                       $email=$row5["email"];
                                       $id_number=$row5["id_number"];
                                       $_SESSION["id_number"]=$id_number;

                                   }
                                    ?>
                                     <table class="table table-bordered">
                                        <tr>
                                            <td>
                                                <input type="text"  class="form-control" placeholder="ID No." name="idnum" value="<?php echo $id_number;?>" disabled>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="text"  class="form-control" placeholder="Student Name" name="studentname" value="<?php echo $first_name.' '.$last_name;?>" required="">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="text"  class="form-control" placeholder="Class Code" name="classcode" value="<?php echo $class_code; ?>" required>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="text"  class="form-control" placeholder="Group No." name="groupnumber" value="<?php echo $group_number; ?>" required>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="text"  class="form-control" placeholder="Contact No." name="contact" value="<?php echo $contact; ?>" required>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="text"  class="form-control" placeholder="Email" name="email" value="<?php echo $email; ?>" required>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <select name="itemname" class=form-control selectpicker>
                                                    <?php
                                                        $res=mysqli_query($link, "select item_name from add_items");
                                                        while($row=mysqli_fetch_array($res))
                                                        {
                                                            echo "<option>";

                                                            echo $row["item_name"];

                                                            echo "</option>";

                                                        }
                                                    ?>
                                                    
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="text"  class="form-control" placeholder="itemborroweddate" name="itemborroweddate" value="<?php echo date("M-d-y"); ?>" required="">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 
                                                <input type="submit"  name="submit2" class="form-control btn btn-default submit" value="Lend Item" style="background-color: blue; color: white">
                                            </td>
                                        </tr>
                                        
                                    </table>
                                    <?php
                                }
                                ?>
                            </form>
                            <?php
                                if(isset($_POST["submit2"]))
                                {
                                    mysqli_query($link, "insert into lend_items values('','$_POST[studentname]','$_POST[classcode]','$_POST[groupnumber]','$_POST[contact]','$_POST[email]', '$_POST[itemname]','$_POST[itemborroweddate]','','$_SESSION[idnum]')");
                                    ?>
                                    <script type="text/javascript">
                                        alert("item borrowed successfully!");
                                        window.location.href= window.location.href;
                                    </script>
                                    <?php

                                }

                            ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
<?php
include "footer.php";
?>
       