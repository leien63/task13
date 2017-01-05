// JavaScript Document
$(document).ready(function() {
	var $newstable=$('#newstable tbody');
	refreshnews();
	//添加新闻
	$('#btnsubmit').click(function(e){
		e.preventDefault();
		   //输入判断
		 if($('#newstitle').val()==="" || $('#newsimg').val()==="" || $('#newstime').val()==="" || $('#newssrc').val()===""){
	  //
	       if($('#newstitle').val()===""){
			 $('#newstitle').parent().addClass('has-error');
			 } //if
		 else {
			 $('#newssrc').parent().removeClass('has-error');
			 }
	  //
	       if($('#newsimg').val()===""){
			 $('#newsimg').parent().addClass('has-error');
			 }   //if
		 else {
			 $('#newsimg').parent().removeClass('has-error');
			 }
	//
	      if($('#newstime').val()===""){
			 $('#newstime').parent().addClass('has-error');
			 }   //if
		 else {
			 $('#newstime').parent().removeClass('has-error');
			 }
	//
	      if($('#newssrc').val()===""){
			 $('#newssrc').parent().addClass('has-error');
			 }   //if
		 else {
			 $('#newssrc').parent().removeClass('has-error');
			 }
	
  } //大if
     else {
		 var jsonNews={
			   newstitle:$("#newstitle").val(),
			   newstype:$("#newstype").val(),
			   newsimg:$("#newsimg").val(),
			   newstime:$("#newstime").val(),
			   newssrc:$("#newssrc").val(),
			 }  //jsonnews
		 
		 $.ajax({
			 url:'/admin/insert',
			 type:'post',
			 data:jsonNews,
			 dataType:"json",
			 success:function(data){
				 console.log(data);
				 } //success
			 
			 }); //ajax
		 
		 } //大else
  
		}); //click
				
		
		
	//删除新闻的功能
	var deleteid= null;
	 $newstable.on('click','.btn-danger',function(e){
		 //console.log('click');
		$('#deleteModal').modal('show');
		
		deleteid=($(this).parent().prevAll().eq(5).html());
         console.log(deleteid);
		 });
		 
	//确认功能	 
	  $('#deleteModal #confirmDelete').click(function(e){
		  
		  if(deleteid){
			$.ajax({
			  url:'/admin/delete',
			  type:'post',
			  data:{newsid:deleteid},
			  success:function(data){
				 console.log('删除成功');
				 $('#deleteModal').modal('hide');
				 refreshnews();
				 
				 } //success
				
				});
			
			   
			  } //if
		  
		  });
		  
		  
	//修改新闻的功能
	var updateid= null;
	 $newstable.on('click','.btn-primary',function(e){
		 //console.log('click');
		$('#updateModal').modal('show');
		updateid=($(this).parent().prevAll().eq(5).html());
          $.ajax({
			 url:'/admin/curnews',
			 type:'get',
			 dataType:"json",
			 data:{newsid:updateid},
			  success:function(data){
				  //console.log(data);
				  $('#unewstitle').val(data[0].newstitle);
				  $('#unewstype').val(data[0].newstype);
				  $('#unewsimg').val(data[0].newsimg);
				  $('#unewssrc').val(data[0].newssrc);
				   var utime=data[0].newstime.split('T')[0];
				   $('#unewstime').val(utime);
				  }
			  });
		 });
		 
	//确认功能	 
	  $('#updateModal #confirmupdate').click(function(e){
		  $.ajax({
			  url:'/admin/update',
			  type:'post',
			  data:{
				   newstitle:$('#unewstitle').val(),
			       newstype:$('#unewstype').val(),
			       newsimg:$('#unewsimg').val(),
			       newstime:$('#unewstime').val(),
				   newssrc:$('#unewssrc').val(),
				   id:updateid
				  },
				  success:function(data){
					  $('#updateModal').modal('hide');
					  refreshnews();
					  }
			 
			  });
		 
		  
		  });
	  
	  
	
	
	
	
	
	
	
	 function refreshnews(){
	    $newstable.empty();
		  $.ajax({
			  type:'get',
			  url:'/admin/getnews2',
			  dataType:"json",
			 success:function(data){
				//console.log(data); 
				data.forEach(function(item,index,array){
					var $tdid=$('<td>').html(item.id);
					var $tdtype=$('<td>').html(item.newstype);
					var $tdtitle=$('<td>').html(item.newstitle);
					var $tdimg=$('<td>').html(item.newsimg);
					var $tdsrc=$('<td>').html(item.newssrc);
					var $tdtime=$('<td>').html(item.newstime);
					var $tdctrl=$('<td>');
					var $btnupdate=$('<button>').addClass('btn btn-primary btn-xs').html('修改');
					var $btndelete=$('<button>').addClass('btn btn-primary btn-xs btn-danger').html('删除');
					$tdctrl.append($btnupdate,$btndelete);
					var $trow=$('<tr>');
					$trow.append($tdid,$tdtype,$tdtitle,$tdimg,$tdsrc,$tdtime,$tdctrl);
					$newstable.append($trow);
					
					})  //data.each
				 
				 }//success
			  
			  }); //ajax
	   
	   }  //refreshnews

    
});  //ready

  



