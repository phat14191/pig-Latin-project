var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var isNumber = function(userArray){
  for (var i = 0; i < userArray.length; i++) {
    for(var j = 0; j < numbers.length; j++){
      if (userArray[i] === numbers[j]) {
        return false;
      }
    }
  }
}
$(document).ready(function(){
  $("form#pig").submit(function(event) {
  event.preventDefault();
  var userInput = $("input#sentence").val();
  var userArray = userInput.split("");


  var test = isNumber(userArray);
  if (test === false){
      console.log("not a string");
  } else {
    
  }
  });
});
// console.log(userArray[i]);
