<<<<<<< HEAD
 var request = new XMLHTTPResponse()
   request.open('GET', 'https://api.github.com/users/shah014/repos',true)
   request.onload =function(){
   var data = JSON.parse(this.response);
   var statusHTML= '';
   $.each(data,function(i,status){
   statusHTML += '<tr>';
   statusHTML += '</td>' + status.name + '</td>';
   statusHTML += '</td>' + status.html_url + '</td>';
   statusHTML += '</tr>';
   });

   $('tbody').html(status HTML);

   }
=======
<<<<<<< HEAD
 var request = new XMLHTTPResponse()
   request.open('GET', 'https://api.github.com/users/shah014/repos',true)
   request.onload =function(){
   var data = JSON.parse(this.response);
   var statusHTML= '';
   $.each(data,function(i,status){
   statusHTML += '<tr>';
   statusHTML += '</td>' + status.name + '</td>';
   statusHTML += '</td>' + status.html_url + '</td>';
   statusHTML += '</tr>';
   });

   $('tbody').html(status HTML);

   }
=======
 var request = new XMLHTTPResponse()
   request.open('GET', 'https://api.github.com/users/shah014/repos',true)
   request.onload =function(){
   var data = JSON.parse(this.response);
   var statusHTML= '';
   $.each(data,function(i,status){
   statusHTML += '<tr>';
   statusHTML += '</td>' + status.name + '</td>';
   statusHTML += '</td>' + status.html_url + '</td>';
   statusHTML += '</tr>';
   });

   $('tbody').html(status HTML);

   }
>>>>>>> 8ba81b34eec847ed869b3c9fbaa28a0eaafe352c
>>>>>>> b9e161d87db2e18e62f83a7cd59709f29a1128a9
request.send();