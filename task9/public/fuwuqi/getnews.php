<?php
   header("Content-type:application/json; charset=utf-8");
   $link=mysqli_connect('localhost','root','','news',3306);
/*   if(!$link)
     {
		 die('could not connect'.mysql_error());
		 }
	 else {
		 echo "mysql connect ok";
		 }*/
  if($link)
     {
	 $sql='SELECT * FORM newslist';	
	 mysql_query($link,"set names utf8");
	 $result=mysqli_query($link,$sql);
	 $senddata=array();
	 while($row=mysqli_fetch_assoc($result)){
		 array_push($senddata,array(
		   'id'=>$row['id'],
		   'newstype'=>$row['newstype'],
		   'newstitle'=>$row['newstitle'],
		   'newsimg'=>$row['newsimg'],
		   'newstime'=>$row['newstime'],
		   'newssrc'=>$row['newssrc'],
		 ));
		 }  //while	 
 echo json_encode($senddata);
	}  //if
	
   else{
	   echo json_encode(array('success'=>'none'));
	   }
	   mysqli_close($link);
?>