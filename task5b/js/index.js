// JavaScript Document

  
  function wjk(){
	var n1 = parseInt(document.getElementById("num1").value);
	var n2 = parseInt(document.getElementById("num2").value);
	var jsf = document.getElementById("ysf").value;
	var jg = document.getElementById("right");
	var dengyu = document.getElementById("dy");
       
    var sum=op(n1,n2,jsf); 
	jg.innerHTML=sum;
	 
	function op(n1,n2,jsf){
	  
	  if( n1/1 !=n1 || n2/1 !=n2){ 
	     return "请输入数字";
		 }
		 
		switch(jsf){
		  case "+":
		   return n1+n2;
		  case "-":
		   return n1-n2;
		  case "*":
		   return n1*n2;
		  case "/":
		   if(n2==0){ return "除数不能为0";}
		   return n1/n2;
		  default:
		   return "请合法输入"
			}/*jsf*/
		}/*op*/
} /*wjk*/
