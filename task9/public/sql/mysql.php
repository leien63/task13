<?php
  $con=mysql_connect("localhost","root","");
  if(!$con){
	die('Could not connect:'.mysql_error());  
	  } else{
		  mysql_select_db("phplesson",$con);
		 // $sql="INSERT INTO `xinwen`(`newstitle`, `newsimg`, `newscontent`, `addtime`) VALUES ('标题','图票','内容','1983-07-23')";
		 $sql="DELETE FROM `xinwen` WHERE `newsid`=10";
		  $result=mysql_query($sql,$con);
		  if(!$result){ die('Error:'.mysql_error());}
		  else { echo "delete success";}
		  
		  //echo "Mysql connect ok";
		  }
    mysql_close($con);
?>