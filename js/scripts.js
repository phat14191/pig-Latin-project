var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var vowels = ['a', 'e', 'i', 'o', 'u'];
var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

//function used to test if user input a number. Will return false if number is found. (utilizes numbers array)
var isNumber = function(userArray){
  for (var i = 0; i < userArray.length; i++) {
    for(var j = 0; j < numbers.length; j++){
      if (userArray[i] === numbers[j]) {
        return false;
      }
    }
  }
}

//function used to test if first letter of word is a vowel (utilizes vowel array)
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
        wordArray[i] += "way";
        var answer = wordArray.join(" ");
        return answer;
      }
    }
    if ((wordArray[i].length > 1) && (eachWord[0] !== "a") || (eachWord[0] !== "e") || (eachWord[0] !== "i") || (eachWord[0] !== "o") || (eachWord[0] !== "u")) {
      for (var k = 0; k < consonants.length; k++){
        var tempString = eachWord.join("");
        var answer = tempString.substring(1) + tempString.substring(0 , 1) + "ay";
        return answer;
      }
    }
  }
}
//if first letter is vowel it will return 1.
var consonantCount = function(wordArray){
  var count = 0;
  for (var i = 0; i < wordArray.length; i++){
    var eachWord = wordArray[i].split("");
    for (var j = 0; j < eachWord.length - 1; j++) {
      count++;
      var xqu = eachWord[1] + eachWord[2];
      var qu = eachWord[0] + eachWord[1];
      if (xqu === "qu") { console.log("I'm here!");
          var test = eachWord.join("");
          var quiet = test.substring(3) + test.substring(0, 3) + "ay";
          return quiet;

      } else if (qu === "qu"){
        var test = eachWord.join("");
        var quiet = test.substring(2) + test.substring(0, 2) + "ay";
        return quiet;
      }
       else if ((eachWord[j + 1] === "a") || (eachWord[j + 1] === "e") || (eachWord[j + 1] === "i") || (eachWord[j + 1] === "o") || (eachWord[j + 1] === "u")) {
        break;
      }
    }
  // var tempString = eachWord.join("");
  //  var consonantMove = tempString.substring(count) + tempString.substring(0 , count) + "ay";
  //  return consonantMove;
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
  var consonantCountTest = consonantCount(wordArray);


  if (numberTest === false){
    alert("No numbers please.");
    }
  else {
    if (vowelTest === true){
      if (userArray.length <= 1){
        for(var i = 0; i < userArray.length - 1; i++){
        alert(singleCharTest);
        }
      } else{
        for(var i = 0; i < userArray.length - 1; i++){
        alert(multiCharTest);
        }
      }
    }
  }

  });
});
