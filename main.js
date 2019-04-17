$(document).ready(function() {

      //     $.getJSON("data.json", function(data){
      //   $.each(data, function(i, name){
      //     $("th").append(name + " ");
      //   });
      // });
 
 		$.getJSON('data.json', function(data){
			$.each(data, function (i, data) {
        $('table tbody').append('<tr><td>'+ data.name + '</td><td>'+ data.description + '</td><td><a href = https://www.google.com/maps/search/?api=1&query=' + data.location[0] + ',' + data.location[1] + '>Map</a></td></tr>');
        
        


        
			  });
		});


});
