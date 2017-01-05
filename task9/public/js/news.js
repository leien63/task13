// JavaScript Document
$(document).ready(function() {
	/*var $lists=$("article ul");
	var $list=$("<li></li>").addClass("news-list").prependTo($lists);
	var $newsimg=$("<div></div>").addClass("newsimg").appendTo($list);
	var $img=$("<img>").attr("src","img/news2.png").appendTo($newsimg);
	var $newscontent=$("<div></div>").addClass('newscontent').appendTo($list);
	var $h1=$("<h1></h1>").html("苏州文化新地标：天桥艺术中心一周年").appendTo($newscontent);
	var $P=$('<p></p>').appendTo($newscontent);
	var $newstime=$("<span></span>").addClass("newstime").html("新闻标题占位符1").appendTo($p);
	var $newssrc=$("<span></span>").addClass("newssrc").html("新闻标题占位符2").appendTo($p);*/
	
	
	
	refreshnews();
    
	
});

     function refreshnews(){
		var $lists=$('article ul');
		$lists.empty();
		
		$.ajax({
		url:'/news',
		type:"get",
		datatype:'json',
		success:function(data){
			console.log(data);
		  /*var $list=$('<li></li>').addClass("news-list").prependTo($lists);
		  var $newsimg=$("<div></div>").addClass("newsimg").appendTo($list);
		  var $img=$('<img width="113" heigth="75">').attr("src",data.newsimg).appendTo($newsimg);
		  var $newscontent=$("<div></div>").addClass("newscontent").appendTo($list);
		  var $h1=$('<h1></h1>').html(data.newstite).appendTo($newscontent);
		  var $p=$("<p></p>").appendTo($newscontent);
		  var $newstime=$('<span></span>').addClass("newstime").html(data.newstime).appendTo($p);
		  var $newssrc=$('<span></span>').addClass("newssrc").html(data.newssrc).appendTo($p); */
			}  /*function*/
		
		});   /*ajax*/
   }

























