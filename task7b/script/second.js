
$(document).ready(function() {
	$(".returntop").on("click",top);
    $("#pf1").on("mouseenter",show1);
	$("#pf1").on("mouseleave",hid1);
	/*$("#pf2").on("mouseenter",show2);
	$("#pf2").on("mouseleave",hid2);
	$("#pf3").on("mouseenter",show3);
	$("#pf3").on("mouseleave",hid3);
	
	$("#pf4").on("mouseenter",show4);
	$("#pf4").on("mouseleave",hid4);
	$("#pf5").on("mouseenter",show5);
	$("#pf5").on("mouseleave",hid5);
	$("#pf6").on("mouseenter",show6);
	$("#pf6").on("mouseleave",hid6);
	$("#pf7").on("mouseenter",show7);
	$("#pf7").on("mouseleave",hid7);*/
	
	$("#ck1").on("click",ck1);
	$("#ck2").on("click",ck2);
	/*$("#close").on("click",kaiguan);
	$("#search").on("click",kg);*/
	$("#search").on("click",kg);
	$("#close").on("click",kaiguan);
	$("#wbk").focus(function(){
		$(this).val("");
		});
	$("#wbk").blur(function(){
		$(this).val("please input value");
		});
  
	
	
});
      function top(){
		  $(window).scrollTop(0);
		  }

        function kg(){
		 $(".clickfdj").css({
			"opacity":"1", "width":"850px", "height":"60px",
			"transition":"all 0.4s ease-in"
			});
			
		 $("#nav").hide();
		 $(".topright").hide(); 
		 }
       
	    function kaiguan(){
		 $(".clickfdj").css({
			"opacity":"0", "width":"0px", "height":"60px",
			"transition":"all 0s ease-in"
			});
		 $("#nav").show();
		 $(".topright").show();
		 }

    /* function kg(){
		 
		 $(".clickfdj").slideDown();
		 $("#nav").hide();
		 $(".topright").hide(); 
		 }
	 
     function kaiguan(){
		 $(".clickfdj").hide();
		 $("#nav").show();
		 $(".topright").show();
		 }*/

     function ck1(){
		$(".main-right").hide();
		$(".banben2").show(); 
		 }
    function ck2(){
		$(".main-right").show();
		$(".banben2").hide(); 
		 }


 function show1(){
	   $("#ks1").hide();
	   $("#bg1").show();
	   $("#pic1").show();
	   $("#fox1a").show(400);
	   $("#fox1b").show(400);
	   $("#fox1c").show(400);
	   $("#ms1").css({ "width":"250px","height":"180px","transition":"all .4s ease-in"})
	   }
	
   function hid1(){
	    $("#ks1").show();
	   $("#bg1").hide();
	   $("#pic1").hide();
	   $("#fox1a").hide(300);
	   $("#fox1b").hide(300);
	   $("#fox1c").hide(300);
	   $("#ms1").css({ "width":"250px","height":"88px","transition":"all .4s ease-in"})
	   }
	 
   function show2(){
	   $("#ks2").hide();
	   $("#bg2").show();
	   $("#pic2").show();
	   $("#fox2a").show(400);
	   $("#fox2b").show(400);
	   $("#fox2c").show(400);
	   $("#ms2").css({ "width":"250px","height":"180px","transition":"all .4s ease-in"})
	   }
	
   function hid2(){
	    $("#ks2").show();
	   $("#bg2").hide();
	   $("#pic2").hide();
	   $("#fox2a").hide(300);
	   $("#fox2b").hide(300);
	   $("#fox2c").hide(300);
	   $("#ms2").css({ "width":"250px","height":"88px","transition":"all .4s ease-in"})
	   }
	 function show3(){
	   $("#ks3").hide();
	   $("#bg3").show();
	   $("#pic3").show();
	   $("#fox3a").show(400);
	   $("#fox3b").show(400);
	   $("#fox3c").show(400);
	   $("#ms3").css({ "width":"250px","height":"180px","transition":"all .4s ease-in"})
	   }
	
   function hid3(){
	    $("#ks3").show();
	   $("#bg3").hide();
	   $("#pic3").hide();
	   $("#fox3a").hide(300);
	   $("#fox3b").hide(300);
	   $("#fox3c").hide(300);
	   $("#ms3").css({ "width":"250px","height":"88px","transition":"all .4s ease-in"})
	   }
  function show4(){
	   $("#ks4").hide();
	   $("#bg4").show();
	   $("#pic4").show();
	   $("#fox4a").show(400);
	   $("#fox4b").show(400);
	   $("#fox4c").show(400);
	   $("#ms4").css({ "width":"250px","height":"180px","transition":"all .4s ease-in"})
	   }
	
   function hid4(){
	    $("#ks4").show();
	   $("#bg4").hide();
	   $("#pic4").hide();
	   $("#fox4a").hide(300);
	   $("#fox4b").hide(300);
	   $("#fox4c").hide(300);
	   $("#ms4").css({ "width":"250px","height":"88px","transition":"all .4s ease-in"})
	   }
	 
  function show5(){
	   $("#ks5").hide();
	   $("#bg5").show();
	   $("#pic5").show();
	   $("#fox5a").show(400);
	   $("#fox5b").show(400);
	   $("#fox5c").show(400);
	   $("#ms5").css({ "width":"250px","height":"180px","transition":"all .4s ease-in"})
	   }
	
   function hid5(){
	    $("#ks5").show();
	   $("#bg5").hide();
	   $("#pic5").hide();
	   $("#fox5a").hide(300);
	   $("#fox5b").hide(300);
	   $("#fox5c").hide(300);
	   $("#ms5").css({ "width":"250px","height":"88px","transition":"all .4s ease-in"})
	   }
	   
   function show6(){
	   $("#ks6").hide();
	   $("#bg6").show();
	   $("#pic6").show();
	   $("#fox6a").show(400);
	   $("#fox6b").show(400);
	   $("#fox6c").show(400);
	   $("#ms6").css({ "width":"250px","height":"180px","transition":"all .4s ease-in"})
	   }
	
   function hid6(){
	    $("#ks6").show();
	   $("#bg6").hide();
	   $("#pic6").hide();
	   $("#fox6a").hide(300);
	   $("#fox6b").hide(300);
	   $("#fox6c").hide(300);
	   $("#ms6").css({ "width":"250px","height":"88px","transition":"all .4s ease-in"})
	   }
	   
	 function show7(){
	   $("#ks7").hide();
	   $("#bg7").show();
	   $("#pic7").show();
	   $("#fox7a").show(400);
	   $("#fox7b").show(400);
	   $("#fox7c").show(400);
	   $("#ms7").css({ "width":"250px","height":"180px","transition":"all .4s ease-in"})
	   }
	
   function hid7(){
	    $("#ks7").show();
	   $("#bg7").hide();
	   $("#pic7").hide();
	   $("#fox7a").hide(300);
	   $("#fox7b").hide(300);
	   $("#fox7c").hide(300);
	   $("#ms7").css({ "width":"250px","height":"88px","transition":"all .4s ease-in"})
	   }
	