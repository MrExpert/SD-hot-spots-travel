$("#location").attr("https://www.google.com/maps/search/?api=1&query=<" + data.location[0] + ">,<" + data.location[1] + ">");
$.getJSON( "ajax/test.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
   
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  });

//   $.getJSON('data.json', function(data){
// 	$.each(data, function (i, obj) {
//         $('#table').bootstrapTable({
//             data: data
//         });
//         // $("#location").LinkFormatter( 
//         //      "<a href=https://www.google.com/maps/search/?api=1&query=" + data.location[0] + ", " + data.location[1] + "></a>";  
//         //         //     // "https://www.google.com/maps/search/?api=1&query=<" + data.location[0] + ">,<" + data.location[1] + ">");
//         //         //     // https://www.google.com/maps/search/?api=1&query=33.09745,-116.99572
//         // );

// 	});
// });


"https://www.google.com/maps/search/?api=1&query=<" + data.location[0] + ">,<" + data.location[1] + ";
"https://www.google.com/maps/search/?api=1&query=" '+ data.location[0] + ',' + data.location[1] +' "