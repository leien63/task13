var express = require('express');
var router = express.Router();
var mysql=require('mysql');

/* 在主页获取新闻是的请求*/
router.get('/', function(req, res, next) {
   var newstype=req.query.newstype;

   var connection=mysql.createConnection({

       host:'localhost',
       port:3306,
       user:'root',
       password:'',
       database:'baidunews',
   });  //connection=mysql
       connection.connect();
       if(newstype!=''&&newstype!=undefined){
       connection.query('SELECT * FROM `news` WHERE `newstype`=?',[newstype],function(err,rows,fields){

       	   res.json(rows);
       	  
       });  //console.log(rows);
      }  //if
  
    else {
             connection.query('SELECT * FROM `news`',function(err,rows,fields){
              res.json(rows);
            });         
        }//else

});   //res.render('index', { title: 'Express' });

module.exports = router;
