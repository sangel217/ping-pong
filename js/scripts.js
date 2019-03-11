$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = counter(number);


    $("#result").text(result);

  });
});

var counter = function(number){
  if (number === 0 || number === 1)
    return 1;
  for (var i = 0; i <= number.length; i += 1) {
    return i;
  }
  return true
};
