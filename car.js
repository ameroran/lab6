// 'use strict'

// var answer = prompt("Do you love car( If Yes enter 1 if No enter 2)")
// var response ;

// if (answer == '1'){
//     response = 'The cars waiting you'
// } else {
//     response = 'You are kidding, right ?'
// }

// document.write ('<h2>' + answer() + '</h2>');


var showorder = function() {
    var order = prompt("What order you want");

while (order !== 'mercedes' && order !=='bmw')
order = prompt("please enter any Germany cars");

    var image;
    var noOfOrder = prompt("how many cars do you want to buy?");
    for (var i=0 ; i<noOfOrder; i=i+1){

    if (order == 'BMW' || 'bmw'){
        image= image + '<img src="https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/5edfd3ea8e1719137a8c106b0df971c5.png">';

    } else if(order == 'Mercedes' || 'mercedes'){
        image = image + '<img src="https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/dbe48aef3890c84b02db0518fe175acd.png">';
    }
}
    return image;
}
    document.write ('<h3>' + showorder() + '</h3>');
      


