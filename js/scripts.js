//* front end logic *//







//* back end logic *//
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#userNumber").val());
    var romanNumeralOutput = [];
    if(userInput === 1){
      romanNumeralOutput.push("I");
    }else if (userInput < 4) {
      if(userInput === 2){
        romanNumeralOutput.push("II");
        console.log(romanNumeralOutput);
      }else{
        romanNumeralOutput.push("III")
        console.log(romanNumeralOutput);
      };
    }
  })
});
