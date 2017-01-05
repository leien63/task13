// JavaScript Document
var source;
function innit(argument){
	source=new EventSource("http://localhost/baidunews/sse/sse.php");
	source.onopen=function(){
		console.log("连接已建立",this.readyState);
		}
    source.onmessage=function(evnet){
		console.log("从服务器时时获取胡数据",evnet.data);
		}
	source.onerror=function(){}
	
	}
	innit();