// JavaScript Document

   function $(str){ return document.getElementById("str");}
   var seven=document.getElementById("seven").value;
   var eight=document.getElementById("eight").value;
   var four=document.getElementById("four").value;
   var five=document.getElementById("five").value;
   var jg=document.getElementById("str");
   var str="";
 
	 
   function cal(val){
	   switch(val){
		  case "0": 
		  case "1":
		  case "2":
		  case "3":
		  case "4":
		  case "5":
		  case "6":
		  case "7":
		  case "8": 
		  case "9":
		  case ".":
		  case "+":
		  case "-":
		  case "*":
		  case "/":
		      //if(str.value==0){ return "除数不能为0";}
		   
		    str=str+val;
		     break;	
			 
		case "sin":
		   var temp=eval(str);
		   str=Math.sin(temp);
		   break;
		   
		case "cos": 
		    var temp=eval(str);
			str=Math.cos(temp);
			break;
		   
		  case "=":
		     str=parseFloat(eval(str).toFixed(8));
		  	   break;
		   }
	      
	   //str=str+val;
	   jg.value=str;
	   return;
} //cal

    