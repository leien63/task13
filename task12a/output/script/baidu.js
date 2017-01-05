// JavaScript Document
/*$(document).ready(function() {
    $("#gdcp").on('mouseenter',show);
	$("#waidi").on("mouseleave",hid);
});
    function show(){
		$("#waidi").show();
		}
	function hid(){
		$("#waidi").hide();
		}*/
		
//单例
$(document).ready(function() {
	
	var index={
	init:function(argument){
		var me=this;
		me.render();
		me.bind();
		},//init
	render:function(){
		var me=this;
		me.btn1=$("#gdcp");
		me.btn2=$("#waidi");
		},//render
	bind:function(){
		var me=this;
		me.btn1.mouseenter(function(){
			$("#waidi").show();
			});//me.btn.mouseenter
		me.btn2.mouseleave(function(){
			$("#waidi").hide();
			});//me.btn2.mouseleave
		
		}//bind
	}; //index

index.init();
    
}); //ready
