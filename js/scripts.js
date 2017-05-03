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
      return true;
    }
  }
}

var isSingleCharWord = function(wordArray) {
  for (var i = 0; i < wordArray.length; i++){
    if ((wordArray[i].length === 1) && (wordArray[i] === "i") || (wordArray[i] === "a")){
    wordArray[i] += "ay";
    var answer = wordArray.join(" ");
    return answer;
    }
  }
}

var isMultiCharWord = function(wordArray){
  for (var i = 0; i < wordArray.length; i++){
    var eachWord = wordArray[i].split("");

    for (var j = 0; j < eachWord.length; j++){
      if ((wordArray[i].length > 1) && (eachWord[0] == "a") || (eachWord[0] == "e") || (eachWord[0] == "i") || (eachWord[0] == "o") || (eachWord[0] == "u")){
        wordArray[i] += "ay";
        var answer = wordArray.join(" ");
        return answer;
      }
    }
  }
}

$(document).ready(function(){
  $("form#pig").submit(function(event) {
  event.preventDefault();
  var userInput = $("input#sentence").val();
  var userArray = userInput.split("");
  var wordArray = userInput.split(" ");

  var numberTest = isNumber(userArray);
  var vowelTest = isFirstVowel(userArray);
  var singleCharTest = isSingleCharWord(wordArray);
  var multiCharTest = isMultiCharWord(wordArray);

  if (numberTest === false){
    $(".output").append("<p>" + userInput + "</p>");
  }
  else{


    // var beginningVowel = wordArray.join("");
    $(".output").append("<p>" + multiCharTest + "</p>");
  }


  });
});


// WORKING single letter word that is vowel CODE
// else if (vowelTest === true){
//   userArray.push("ay")
//   var beginningVowel = userArray.join("");
//   $(".output").append("<p>" + beginningVowel + "</p>");

// final for-loop
// for(var i = 0; i < wordArray; i++){
//   if (wordArray[i] is a  single letter word){
//     call isOneWordVowel
//   }else if (multiple letter word) {
//     call isMu
//   }
// }
