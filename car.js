var answer = prompt("Do you love car ( If Yes enter 1 if No enter 0)")
var response ;

if (answer == 1){
    response = "The cars waiting you"
} else {
    response = "You are kidding, right ?"
}

document.write('<h2>' +response+ '<h2>');