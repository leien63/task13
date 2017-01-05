<?php
  header("Content-type:application/json; charset=utf-8");
//  header("Content-type:application/json; charset=utf-8");
 require_once('db.php');
  
//  if($link){
//	  $newsid=$_POST["newsid"];
//
//	  //不要有乱码
//	  mysqli_query($link,"SET NAMES utf8");
//	  $sql="DELETE FROM `news` WHERE `news`.`id`={$newsid}";
//
//	  mysqli_query($link,$sql);
//
//	   echo json_encode(array('删除状态'=>'成功'));
//	  }
//     mysqli_close();
if ($link) {
    $newsid=$_POST["newsid"];
    delecttr($link,$newsid);
}else{
    die('Could not connect: ' . mysql_error());
}
function delecttr($link,$newsid)
{
    mysqli_query($link,"SET NAMES utf8");
    $sql="DELETE FROM news WHERE id={$newsid}";
    mysqli_query($link,$sql);
    echo json_encode(array("success"=>"删除成功"));
}
mysqli_close($link);
?>