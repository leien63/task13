<?php header("Content-type:application/json; charset=utf-8");
  require_once('db.php');

if ($link)
    {   //执行成功的过程
    $sql='SELECT * FROM news';
	mysqli_query($link,"SET NAMES utf8");
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
		   )); //array_push
		
		}//while
	  echo json_encode($senddata);	
	}  //if
	   
	
else {
  echo json_encode(array('连接信息'=>'连接不成功'));
	}
	mysqli_close($link);
/*$arr=array( 
             "newstype"=>"百家", 
			 "newsimg"=>"img/3.JPG", 
			 "newstime"=>"2016-11-29", 
			 "newssrc"=>"极客学院", 
			 "newstite"=>"动态测试"
			 );*/
      //echo json_encode($arr);

?>