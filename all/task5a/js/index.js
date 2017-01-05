// JavaScript Document
window.onload = function() {
	var j = document.getElementById("tijiao");
	var k = document.getElementById("which");
	j.onmousemove = function(){
		j.style.background="#0cF";
		}
    j.onmouseout = function(){
		j.style.background="#FFF";
		}
	j.onclick = function(){
	var i = parseInt(document.getElementById("score").value);
	
		switch(parseInt(i/10)){
		   case 9:
			  alert(("一等生"));
			  
			  break;
			case 10:
			  alert(("一等生"));
			  
			  break;
			case 8:
			 alert(("二等生"));

			  break; 
			case 7:
			  alert(("三等生"));

			  break;
			case 6:
			  alert(("四等生"));

			  break;  
			case 5:
			  alert(("五等生"));
			  
			  break;
			case 4:
			  alert(("六等生"));
			  
			  break; 
			case 3:
			  alert(("七等生"));
			  
			  break;
			case 2:
			   alert(("八等生"));
			  
			  break;
			case 1:
			  alert(("九等生"));
			  
			  break;
			case 0:
			  alert(("十等生"));
			  
			  break;
			 default:
			  alert("请在0到100范围内输入");
			  }
		
		}
	
	
	
	}