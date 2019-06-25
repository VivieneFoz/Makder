<?php
include "header.php";
include "connection.php";
?>

        <div class="right_col" role="main">
            <div class="">
                <div class="page-title">
                    <div class="title_left">
                        <h3>iBorrow | Instructor</h3>
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
                                <h2>Plain Page</h2>

                                <div class="clearfix"></div>
                            </div>
                            <div class="x_content">
                            <?php
                                $res=mysqli_query($link, "select * from student_login");
                                echo "<table>";
                                echo "<tr>";
                                echo "<th>"; echo "id_number"; echo "</th>";
                                echo "<th>"; echo "first_name"; echo "</th>";
                                echo "<th>"; echo "last_name"; echo "</th>";
                                echo "<th>"; echo "group_number"; echo "</th>";
                                echo "<th>"; echo "contact"; echo "</th>";
                                echo "<th>"; echo "email"; echo "</th>";
                                echo "</tr>";
                                while($row=mysqli_fetch_array($res)){
                                    echo "<tr>";
                                    echo "<td>"; echo $row["id_number"]; echo "</td>";
                                    echo "<td>"; echo $row["first_name"]; echo "</td>";
                                    echo "<td>"; echo $row["last_name"]; echo "</td>";
                                    echo "<td>"; echo $row["group_number"]; echo "</td>";
                                    echo "<td>"; echo $row["contact"]; echo "</td>";
                                    echo "<td>"; echo $row["email"]; echo "</td>";
                                    echo "</tr>";
                                }
                                echo "</table>"

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
       