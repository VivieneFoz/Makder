<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html style="height: auto;"><head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>iBorrow</title>
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/AdminLTE.min.css">
<link rel="stylesheet" href="css/font-awesome.min.css">
<link rel="stylesheet" href="css/Custom.css">
<link rel="stylesheet" href="css/dataTables.bootstrap.min.css">
<link rel="stylesheet" href="css/responsive.bootstrap.min.css">
<link rel="stylesheet" href="css/_all-skins.min.css">

    </head>
    <body class="skin-blue layout-top-nav fixed" style="height: auto; overflow:hidden;" >
        
        <div class="wrapper" style="height: auto;">
        <header class="main-header">
    <nav class="navbar navbar-static-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <span class="logo-mini"></span>
                  <span class="navbar navbar-dark bg-primary">  
                        <a class="navbar-brand" href="#">iBorrow</a>
                  </span>
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                    <i class="fa fa-bars"></i>
                </button>
            </div>
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <li class="dropdown user user-menu">
                      
                            <a href="http://localhost:8080/login/logout.jsp" style="color: white">Logout</a>
		
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>            <!-- Full Width Column -->
            <div class="content-wrapper" style="min-height: 1024px;">
                <div class="container-fluid">
                    <!-- Content Header (Page header) -->
                    <section class="content-header">
                    <h1>
                       Items                    </h1>
                       </section>
                    <!-- Main content -->
                    <section class="content">
    <div class="row">
        <div class="col-lg-8">
            <div class="box">
                <div class="box-header with-border" >
                    <div class="box-tools">
                        <form id="FormSearch">
                                <div class="input-group" style="">
                                <input name="search" id="text-search" class=" input-sm pull-right" placeholder="Search..." type="text">
                                <div class="input-group-btn">
                                    <button type="submit" class="btn btn-sm btn-default"><i class="fa fa-search"></i></button>
                                </div>
                            </div>
                        </form>
                        <br>
                    </div>
                    <br>
                </div><!-- /.box-header -->
            <div class="box-body no-padding" id="MenuArea">     
    <div id="MenuList" tabindex="500" style="outline: none;">
     <div class="col-md-4">
        <div class="thumbnail">
          <a href="#" onclick="Order.AddItemName('1','Broom','1')">
                     <img src="images/walis.jpg" alt="Tidak ada foto" style="width:100%">
            <div class="caption text-center">
              <p>Broom</p>
            </div>
          </a>
          <div class="title text-center">Broom</div>
        </div>
    </div>
<div class="col-md-4">
    <div class="thumbnail">
      <a href="#" onclick="Order.AddMenu('2','StickBroom','1')">
                 <img src="images/stickbroom.jpg" alt="Tidak ada foto" style="width:100%">
         
        <div class="caption text-center">
          <p>Stick Broom</p>
        </div>
      </a>
      <div class="title text-center">Stick Broom</div>
    </div>
</div>
<div class="col-md-4">
    <div class="thumbnail">
      <a href="#" onclick="Order.AddMenu('3','Dust Pan','1')">
                 <img src="images/dustpan.jpg" alt="Tidak ada foto" style="width:60%">
         
        <div class="caption text-center">
          <p>Dust Pan</p>
        </div>
      </a>
      <div class="title text-center">Dust Pan</div>
    </div>
</div>
<div class="col-md-4">
    <div class="thumbnail">
      <a href="#" onclick="Order.AddMenu('4','Shovel', '1')">
                 <img src="images/shove.jpg" alt="Tidak ada foto" style="width:90%">
        <div class="caption text-center">
          <p>Shovel</p>
        </div>
      </a>
      <div class="title text-center">Shovel</div>
    </div>
</div>
<div class="col-md-4">
    <div class="thumbnail">
      <a href="#" onclick="Order.AddMenu('5','Garden Shovel, '1')">
                 <img src="images/gardenshovel.jpg" alt="Tidak ada foto" style="width:60%">
         
        <div class="caption text-center">
          <p>Garden Shovel</p>
        </div>
      </a>
      <div class="title text-center">Garden Shovel</div>
    </div>
</div>
<div class="col-md-4">
    <div class="thumbnail">
      <a href="#" onclick="Order.AddMenu('6','Watering Can','1')">
                 <img src="images/wateringcan.jpg" alt="Tidak ada foto" style="width:70%">
         
        <div class="caption text-center">
          <p>Watering Can</p>
        </div>
      </a>
      <div class="title text-center">Watering Can</div>
    </div>
</div>

<div class="col-md-4">
    <div class="thumbnail">
      <a href="#" onclick="Order.AddMenu('7','Hivest Jacket','1')">
                 <img src="images/hivestjacket.jpg" alt="Tidak ada foto" style="width:50%">
         
        <div class="caption text-center">
          <p>Hivest Jacket</p>
        </div>
      </a>
      <div class="title text-center">Hivest Jacket</div>
    </div>
</div>
<div class="col-md-4">
    <div class="thumbnail">
      <a href="#" onclick="Order.AddMenu('8','Bucket','1')">
                 <img src="images/bucket.jpg" alt="Tidak ada foto" style="width:80%">
         
        <div class="caption text-center">
          <p>Bucket</p>
        </div>
      </a>
      <div class="title text-center">Bucket</div>
    </div>
</div>
        

<div class="col-md-4">
    <div class="thumbnail">
      <a href="#" onclick="Order.AddMenu('9','Water Dipper','1')">
                 <img src="images/waterdipper.jpg" alt="Tidak ada foto" style="width:100%">
         
        <div class="caption text-center">
          <p>Water Dipper</p>
        </div>
      </a>
      <div class="title text-center">Water Dipper</div>
    </div>
</div>

<div class="col-md-4">
    <div class="thumbnail">
      <a href="#" onclick="Order.AddMenu('10','Gardening Scissor','1')">
                 <img src="images/gardeningScissor.jpg" alt="Tidak ada foto" style="width:100%">
         
        <div class="caption text-center">
          <p>Gardening Scissor</p>
        </div>
      </a>
      <div class="title text-center">Gardening Scissor</div>
    </div>
</div>
</div>
            </div><!-- /.box-body -->

        </div><!-- /.box -->
    </div>
    <div class="col-lg-4">
        <div class="box">
            <div class="box-header with-border">
                <div class="box-title">
                    Reserved Items
                </div>
                
            </div><!-- /.box-header -->
            <div class="box-body" id="MenuBill">
                <div class="table-responsive">
                    <div id="TableBill_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                        <div class="row">
                        <div class="col-sm-6"></div><div class="col-sm-6"></div>
                        </div>
                        <div class="row">
                        <div class="col-sm-12"><div class="dataTables_scroll">
                            <div class="dataTables_scrollHead" style="overflow: hidden; position: relative; border: 0px; width: 100%;">
                                <div class="dataTables_scrollHeadInner" style="box-sizing: content-box; width: 687px; padding-right: 0px;">
                                    <table class="table table-hover dataTable" role="grid" style="margin-left: 0px; width: 687px;">
                                        <thead>
                            <tr role="row"><th class="sorting_disabled" rowspan="1" colspan="1" style="width: 131px;">Item Name</th>
                                <th align="center" class="sorting_disabled" rowspan="1" colspan="1" style="width: 148px;">Qty</th>
                                <th class="sorting_disabled" rowspan="1" colspan="1" style="width: 114px;"></th></tr>
                        </thead>
                                    </table>
                                </div>
                            </div>
                            <div class="dataTables_scrollBody" style="overflow: auto; height: 38px; width: 100%;">
                                <table class="table table-hover dataTable" id="TableBill" role="grid" style="width: 100%;">
                                    <tfoot>

                            <tr style="height: 0px;">
                                <td rowspan="1" colspan="1" style="padding-top: 0px; padding-bottom: 0px; border-top-width: 0px; border-bottom-width: 0px; height: 0px; width: 131px;"></td>
                                <td rowspan="1" colspan="1" style="padding-top: 0px; padding-bottom: 0px; border-top-width: 0px; border-bottom-width: 0px; height: 0px; width: 108px;"></td><td rowspan="1" colspan="1" style="padding-top: 0px; padding-bottom: 0px; border-top-width: 0px; border-bottom-width: 0px; height: 0px; width: 148px;"></td>
                                <td colspan="2" rowspan="1" style="padding-top: 0px; padding-bottom: 0px; border-top-width: 0px; border-bottom-width: 0px; height: 0px; width: 236px;">
                                </td>
                                        </tr>
                        </tfoot>
                                    <thead>
                            <tr role="row" style="height: 0px;">
                                <th class="sorting_disabled" rowspan="1" colspan="1" style="width: 131px; padding-top: 0px; padding-bottom: 0px; border-top-width: 0px; border-bottom-width: 0px; height: 0px;">
                                    <div class="dataTables_sizing" style="height:0;overflow:hidden;">Item Name</div>
                                </th>
                                <th class="sorting_disabled" rowspan="1" colspan="1" style="width: 108px; padding-top: 0px; padding-bottom: 0px; border-top-width: 0px; border-bottom-width: 0px; height: 0px;"></th>
                                <th align="center" class="sorting_disabled" rowspan="1" colspan="1" style="width: 148px; padding-top: 0px; padding-bottom: 0px; border-top-width: 0px; border-bottom-width: 0px; height: 0px;">
                                    <div class="dataTables_sizing" style="height:0;overflow:hidden;">Qty</div>
                                </th>
                                <th class="sorting_disabled" rowspan="1" colspan="1" style="width: 106px; padding-top: 0px; padding-bottom: 0px; border-top-width: 0px; border-bottom-width: 0px; height: 0px;">
                                </th>
                                <th class="sorting_disabled" rowspan="1" colspan="1" style="width: 114px; padding-top: 0px; padding-bottom: 0px; border-top-width: 0px; border-bottom-width: 0px; height: 0px;">
                                    <div class="dataTables_sizing" style="height:0;overflow:hidden;">
                                    </div>
                                </th>
                                        </tr>
                        </thead>
                        
                        <tbody>
                            <tr role="row" class="odd"><td valign="top" colspan="5" class="dataTables_empty">No data available in table</td></tr>
                        
                    </table>
                            </div>
                            <div class="dataTables_scrollFoot" style="overflow: hidden; border: 0px; width: 100%;">
                                <div class="dataTables_scrollFootInner" style="width: 687px; padding-right: 0px;">
                                    <table class="table table-hover dataTable" role="grid" style="margin-left: 0px; width: 687px;">
                                        <tfoot>

                            <tr>
                                <td rowspan="1" colspan="1" style="width: 131px;"><strong>Total Items</strong>
                                </td>
                            </tr>
                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-5">
                            </div>
                            <div class="col-sm-7">
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- /.box-body -->
            <div class="box-footer clearfix">
                <a href="javascript:document.getElementById('FormSubmit').submit()" class="btn btn-default btn-sm pull-right" data-toggle="tooltip" data-placement="top" title="Send Items">
                    <i class="fa fa-save"></i> Send
                </a> 
            </div>
        </div>
    </div>
</div>

<form method="POST" action="http://localhost/Makder/LoginPage/Submit.php" id="FormSubmit">
    <!-- Pag send ng mga reserved items sa class staff-->
    <!-- Parag viewing ng Class Staff -->
</form>

                    </section>
                </div>
            </div>
        </div>
<script src="http://localhost/Makder/LoginPage/js/jquery-2.2.3.min.js"></script>
<script src="http://localhost/Makder/LoginPage/js/bootstrap.min.js"></script>
<script src="http://localhost/Makder/LoginPage/js/jquery.nicescroll.min.js"></script>

<div id="ascrail2000" class="nicescroll-rails" style="width: 7px; z-index: auto; cursor: default; position: absolute; top: 160px; left: 987px; height: 792px; display: block; opacity: 0;">
    <div style="position: relative; top: 0px; float: right; width: 5px; height: 661px; background-color: rgb(231, 76, 60); border: 1px solid rgb(255, 255, 255); background-clip: padding-box; border-radius: 5px;">
    </div>
        </div>
        
        <div id="ascrail2000-hr" class="nicescroll-rails" style="height: 7px; z-index: auto; top: 783px; left: 31px; position: absolute; cursor: default; display: none; opacity: 0; width: 700px;"><div style="position: relative; top: 0px; height: 5px; width: 707px; background-color: rgb(231, 76, 60); border: 1px solid rgb(255, 255, 255); background-clip: padding-box; border-radius: 5px; left: 0px;">
        </div>
        </div>
    </body>
</html>