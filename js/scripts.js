$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = counter(number);
    for (var i = 0; i < number; i ++){
      $(".unstyled").append("<li>" + result[i] + "</li>");
    }

    $("#result").show();

  });
});

var counter = function(number){
  var numberList = [];
  for (var i = 1; i < number; i ++){
    if (i % 3 === 0){
      numberList.push("ping")
    } else if(i % 5 === 0){
      numberList.push("pong")
    } else if(i % 15 === 0){
      numberList.push("pingpong")
    } else{
      numberList.push(i);
    }
  }
  return numberList
};
