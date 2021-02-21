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
request.send();