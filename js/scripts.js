$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var pingPongResult = counter(number);
    for (var i = 0; i < number; i +=1){
      $("ul#result").append("<li>" + number + "</li>");
    
    


    $("#result").show();

  });
});

var counter = function(number){
  var resultArray = [];
  for (var i = 1; i <= number; i ++) {
    if(i % 15) === 0) {
      resultArray.push("pingpong");
  } else if(i % 5 === 0) {
    resultArray.push("pong");
  } else if(i % 3 === 0) {
    resultArray.push("ping");
  } else { 
    resultArray.push(i);
  } 
    return resultArray;
};
