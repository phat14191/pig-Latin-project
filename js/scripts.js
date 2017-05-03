var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var vowels = ['a', 'e', 'i', 'o', 'u'];

var isNumber = function(userArray){
  for (var i = 0; i < userArray.length; i++) {
    for(var j = 0; j < numbers.length; j++){
      if (userArray[i] === numbers[j]) {
        return false;
      }
    }
  }
}

var isFirstVowel = function(userArray) {
  for (var i = 0; i < vowels.length; i++){
    if (userArray[0] === vowels[i]){
      return "vowel found";
    }
  }
}


$(document).ready(function(){
  $("form#pig").submit(function(event) {
  event.preventDefault();
  var userInput = $("input#sentence").val();
  var userArray = userInput.split("");

  var numberTest = isNumber(userArray);
  var vowelTest = isFirstVowel(userArray);

  if (numberTest === false){
    $(".output").append("<p>" + userInput + "</p>");
  } else {
    $(".output").append("<p>" + vowelTest + "</p>");
  }
  
  });
});
// console.log(userArray[i]);
