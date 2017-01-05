// JavaScript Document
$(document).ready(function() {
	$(window).on("load",function(){
		imglocation();
		})
 });
     
	
 
 
    function imglocation(){
		var box=$(".box");  //获取盒子
		var boxwidth=box.eq(0).width();   //获取盒子宽度
		var num=Math.floor($(".contain").width()/boxwidth);	
		var boxarr=[];
		box.each(function(index, element) {
         var boxheight=box.eq(index).height();  //获取盒子高度
		 if(index<num){
			 boxarr[index]=boxheight;
            }
		 else {
			 var minboxheight=Math.min.apply(null,boxarr);
			 var minboxposit=$.inArray(minboxheight,boxarr);  //最小高度在哪个位置
			 
			    //console.log(minboxposit);  
				
			 $(element).css({
				  "position":"absolute",
				  "top":minboxheight,
				  "left":box.eq(minboxposit).position().left
				  });
				 
				  boxarr[minboxposit] += box.eq(index).height();
			 }
		 
        });
		
		}