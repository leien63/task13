<?php 
  header("Content-type:text/event-stream; charset=utf-8");
  header("Access-Control-Allow-Origin:http://127.0.0.1");
  echo "data:现在北京时间是",date("h:i:s");
?>