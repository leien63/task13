var str=["a", "x", "b", "d", "m", "a", "k", "m", "p","p", "j", "a"];
function max(){
var json={};
var num=0;
var value=null;
var xiabiao;
       var add = {}; 
for(var i in str){
var k=str[i];
if(!json[k]){
json[k]=[];
add[k]=[];
}
json[k].push(k);
add[k]=add[i];

//alert(json[k]); //这里不需要else，否则只有存在这个字符时才添加。次数会少一次
}
for(var attr in json){
if(num<json[attr].length){
num=json[attr].length;
xiabiao=attr; 
value=json[attr][0]; 
//var adress=value.map(function(a,b){ return b;});
}
}
document.write("出现最多的字符是:"+value+',出现次数是:'+num+"出现的位置是："+add[k]);
};
max();