// JavaScript Document
// 单例代码
$(document).ready(function() {
  var index={
	init:function(argument){
		var me=this;
		me.render();
		me.bind();
		},//init
	//render模块用来获取元素，集中一个区域管理	
	render:function(){
		var me=this;
		me.btn1=$("#gdcp");
		me.btn2=$("#waidi");
		me.change=$("#chang");
		me.shouqi=$("#shouqi");
		me.pfa=$("#pf1");
		me.pfb=$("#pf2");
		me.pfc=$("#pf3");
		me.pfright=$("#pf4");
		me.bg=$("#bg");
		me.notpf=$("#notpf");
		me.tj=$("#tj");
		me.dh=$("#dh");
		me.sp=$("#sp");
		me.gw=$("#gw");
		me.t1left=$("#t1left");
		me.t1mid=$("#t1mid");
		},//render
		
	//bind模块是功能实现区域	
	bind:function(){
		var me=this;
		//hide函数处理一些公共的功能，便于后面调用
		function hide(){
		  $("#tuijian").hide();
		  $("#t1fox").hide();
		  $("#daohang").hide();
		  $("#shipin").hide();
		  $("#gouwu").hide();
		  $("#t1left").css({ "background":"#FFF"});
		  $("#tj").css({ "background":"#FFF"});
		  $("#dh").css({ "background":"#FFF"});
		  $("#sp").css({ "background":"#FFF"});
		  $("#gw").css({ "background":"#FFF"});
		} //hide
		
		me.btn1.mouseenter(function(){
			  $("#waidi").show();
			});//me.btn.mouseenter
		me.btn2.mouseleave(function(){
			  $("#waidi").hide();
			});//me.btn2.mouseleave
		
		me.change.click(function(){
			   $(".huanfu").show(800);
			   $(".bd").hide();
			 });//change.click
			 
		me.shouqi.click(function(){
			  $(".huanfu").hide(800);
			  $(".bd").show();
			});//shouqi.click
		
		/*me.pfa.mouseover(function(){
			  pfright.style.backgroundPosition="0px 0px";
			}); //pfa.onmouseover*/
		me.pfa.click(function(){
			  bg.style.backgroundImage="url(img/ldh.jpg)";
			  notpf.style.display="inline-block";
			  
			});//pfa.click
		
	/*	me.pfb.mouseover(function(){
			  pfright.style.backgroundPosition="0 -176px";
			}); //pfb.onmouseover*/
		me.pfb.click(function(){
			  bg.style.backgroundImage="url(img/ytxwz.jpg)";
			  notpf.style.display="inline-block";
			  
			});//pfb.click
			
		/*me.pfc.mouseover(function(){
			  pfright.style.backgroundPosition="0 -352px";
			}); //pfc.onmouseover*/
		me.pfc.click(function(){
			  bg.style.backgroundImage="url(img/dycc.jpg)";
			  notpf.style.display="inline-block";
			
			});//pfc.click
			
		me.notpf.click(function(){
			  bg.style.background="#FFF";
			  notpf.style.display="none";
			});//notpf.click
			
		me.tj.click(function(){
			 // $("#t1left").css({ "background":"#FFF"});
			 hide();
			  $(this).css({"background":"#9a9da2"})
			  $("#tuijian").show();
			});//tj.click
			
		me.dh.click(function(){
			   hide();
			    $(this).css({"background":"#9a9da2"});
				$("#daohang").show();
			});//dh.click
			
		me.sp.click(function(){
			    hide();
			    $(this).css({"background":"#9a9da2"});
			     $("#shipin").show();
			});//sp.click
			
		me.gw.click(function(){
			 hide();
			 $(this).css({"background":"#9a9da2"});
			  $("#gouwu").show();
			});//gw.click
		
		me.t1left.click(function(){
			 hide();
			  $(this).css({"background":"#9a9da2"});
			 $("#t1fox").show();
			});//t1left.click	
		}//bind
	}; //index

index.init();
    
}); //ready










//原始代码
 /*window.onload=function (){
   
   var pfa=document.getElementById("pf1");
   var pfb=document.getElementById("pf2");
   var pfc=document.getElementById("pf3");
   var pfright=document.getElementById("pf4");
   var bg=document.getElementById("bg");
   var notpf=document.getElementById("notpf");
   //var arr=["","",""];
     var tempbg=localStorage.getItem('a',b);
  if (tempbg){
	   bg.style.backgroundImage="tempbg";
	  }
	  
	  
       function changebg(bgimg){
	      bg.style.backgroundImage=bgimg;
		 notpf.style.display="inline-block";
	     window.localStorage.setItem('a',bgimg);	

	}	//changebg
   
   
   pfa.onmouseover=function(){
	   pfright.style.backgroundPosition="0 0";
	   }
   pfa.onclick=function(){
	    bg.style.backgroundImage="url(img/ldh.jpg)";
	    notpf.style.display="inline-block";
	    window.localStorage.setItem('a');
	   }
	   
   pfb.onmouseover=function(){
	   pfright.style.backgroundPosition="0 -176px";
	   }
   pfb.onclick=function(){
	   bg.style.backgroundImage="url(img/ytxwz.jpg)";
	   notpf.style.display="inline-block";
	   window.localStorage.setItem('a');
	   }
	   
   pfc.onmouseover=function(){
	   pfright.style.backgroundPosition="0 -352px";
	   }
	pfc.onclick=function(){
		 bg.style.backgroundImage="url(img/dycc.jpg)";
		 notpf.style.display="inline-block";
		 window.localStorage.setItem('a');
		}
		
	notpf.onclick=function(){
		bg.style.background="#FFF";
		notpf.style.display="none";
		}
	
	
	}
$(document).ready(function() {
    $("#gdcp").on('mouseenter',show);
	$("#waidi").on("mouseleave",hid);
	
    $(".t1mid").on('mouseenter',upmid);
	$('.t1mid').on("mouseleave",downmid);
	
	$('#t1right').on('mouseenter',upright);
	$('#t1right').on("mouseleave",downright);
	
	$("#t1a").on('mouseenter',t1aright);
    $('#t1a').on("mouseleave",t1arighthid);
	
	$("#t1left").on("click",fox);
	$('#tj').on("click",tuijian);
	$("#dh").on('click',daohang);
	$("#sp").on('click',shipin);
	$("#gw").on('click',gouwu);	
	$("#shouqi").on("click",closepifu);
	$("#chang").on("click",chang);
	
});
    
	 function fox(){
	  //$("#t1left").css({ "background":"#FFF"});
	  $(this).css({"background":"#9a9da2"})
	  $("#tuijian").hide();
	  $("#t1fox").show();
	  $("#daohang").hide();
	  $("#shipin").hide();
	  $("#gouwu").hide(); 
		 
		 }
	
   
    function tuijian(){
	  $("#t1left").css({ "background":"#FFF"});
	  $(this).css({"background":"#9a9da2"})
	  $("#tuijian").show();
	  $("#t1fox").hide();
	  $("#daohang").hide();
	  $("#shipin").hide();
	  $("#gouwu").hide();
	 
	  }
	   
	    function daohang(){
	  //$("#t1left").css({ "background":"#FFF"});
	  $(this).css({"background":"#9a9da2"})
	  $("#tuijian").hide();
	  $("#t1fox").hide();
	  $("#daohang").show();
	  $("#shipin").hide();
	  $("#gouwu").hide();
	 
	  }
	  
	  function shipin(){
	  //$("#t1left").css({ "background":"#FFF"});
	  $(this).css({"background":"#9a9da2"})
	  $("#tuijian").hide();
	  $("#t1fox").hide();
	  $("#daohang").hide();
	  $("#shipin").show();
	  $("#gouwu").hide();
	 
	  }
	   
    function gouwu(){
	  //$("#t1left").css({ "background":"#FFF"});
	  $(this).css({"background":"#9a9da2"})
	  $("#tuijian").hide();
	  $("#t1fox").hide();
	  $("#daohang").hide();
	  $("#shipin").hide();
	  $("#gouwu").show();
	 
	  }
   
    function show(){
		$("#waidi").show();
		}
		
	function hid(){
		$("#waidi").hide();
		}
		
		
    function upmid(){
		$(this).css({ color: "#FFF", background: "#b3b6bb" });
		//$("#t1mid").find('span').css({ color: "#ff0011", background: "#b3b6bb" });
		//$(this).css({ color: "#ff0011", background: "#b3b6bb" });
		//$('span').style.background="#b3b6bb";
		}
	function downmid(){
		$(this).css({ color: "#000", background: "#FFF"});
		}
  
   function upright(){
	   $(this).css({
		   "background-position":"-121px -73px"
		   });
	   }
	   
   function downright(){
	   $(this).css({
			"background-position": "-121px -49px"   
		   });
	   }	   
	   
   function t1aright(){
	   $(".t1aright").show();
	   }
	   
  function t1arighthid(){
	   $(".t1aright").hide();
	   }
   
   function closepifu(){
	   $(".huanfu").hide(800);
	   $(".huanfu").hi
	   $(".bd").show();
	   
	   }
  
  function chang(){
	  $(".huanfu").show(800);
	   $(".bd").hide();
	  }
	   */
	   
	   
	   
	   
	   