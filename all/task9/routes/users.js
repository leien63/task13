var express = require('express');
var router = express.Router();
var mysql=require('mysql');

   var connection=mysql.createPool({
       host:'localhost',
       port:3306,
       user:'root',
       password:'',
       database:'baidunews'
   }); //mysql.createPool

/* 后台路由页面 */
router.get('/getnews2', function(req, res, next) {
   connection.query('SELECT * FROM `news` ',function(err,rows){
       	   res.json(rows);
       	});
       	  
 // res.send('respond with a resource');
}); //function(req,res,next)

//点击确认更新
router.post('/update',function(req,res){
   var newsid=req.body.id,
       newstype=req.body.newstype,
       newstitle=req.body.newstitle,
       newstime=req.body.newstime,
       newssrc=req.body.newssrc;
    connection.query(
                       'UPDATE `news` SET `newstitle`=?,`newstype`=?,`newsimg`=?,`newstime`=?,`newssrc`=? WHERE `id`=?',[newstitle,newstype,newsimg,newstime,newssrc,newsid],function(err,rows){
                        console.log(rows.changeRows);
                      res.json(rows);
    });  //connection.query
}) //post

//模态框取值
    router.get('/curnews',function(req,res){
       var newsid=req.query.newsid;
       connection.query('SELECT * FROM `news` WHERE id=?',[newsid],function(err,rows){
       	res.json(rows);

       }); //function(err,rows)

    });  //function(req,res)

 //删除

    router.post('/delete',function(req,res){
       var newsid=req.body.newsid;
       connection.query('DELETE FROM news WHERE id=?',[newsid],function(err,result){
              console.log(result.affectedRows);

             res.json("ok");
 
       });  //function(err,result)

    })  //function(req,res)


 //insert

   router.post('insert',function(req,res){
      var newstype=req.body.newstype,
          newstitle=req.body.newstitle,
          newsimg=req.body.newsimg,
          newstime=req.body.newstime,
          newssrc=req.body.newssrc;

         connection.query('INSERT INTO `news`  (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES (?,?,?,?,?)',[newstitle,newstype,newsimg,newstime,newssrc],function(err,result){
              if(!err){
                   res.json("ok");                 

                 console.log(result.insertId);

              }  //if
   
         });  //function(err,rows)

   }) //function(req,res)

module.exports = router;
