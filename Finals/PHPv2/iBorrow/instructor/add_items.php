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
                                <h2>Add Items</h2>

                                <div class="clearfix"></div>
                            </div>
                            <div class="x_content">
                                <form name="form1" action="" method="post" class="col-lg-6" enctype="multipart/form-data">
                                    <table class="table table-bordered">
                                        <tr>
                                            <td>
                                                <input type="text"  class="form-control" placeholder="Item Name" name="itemname" required="">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 
                                                Item Image 
                                                <input type="file"  name="f1" required="">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 
                                                <input type="text"  class="form-control" placeholder="Item quantity" name="iqty"  required="">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 
                                                <input type="text"  class="form-control" placeholder="Available quantity" name="aqty"  required="">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 
                                                <input type="submit"  name="submit1" class="btn btn-default submit" value="Add item" style="background-color: blue; color: white">
                                            </td>
                                        </tr>
                                    </table>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <?php
            if(isset($_POST["submit1"]))
            {   
                $tm=md5(time());
                $fnm=$_FILES["f1"]["name"];
                $dst="./items_image/".$tm.$fnm;
                $dst1="items_image".$tm.$fnm;

                move_uploaded_file($_FILES["f1"]["tmp_name"], $dst);

                mysqli_query($link, "insert into add_items values('','$_POST[itemname]','$dst1','$_POST[iqty]','$_POST[aqty]')");   
        ?>
                <script type="text/javascript">
                    alert("Item insert successful!");
                </script>
        <?php
                }
        ?>
<?php
include "footer.php";
?>
       