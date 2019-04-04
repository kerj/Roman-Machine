//* front end logic *//
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#userNumber").val());
    romanNumeralConverter(userInput);
  })



//* back end logic *//
  function romanNumeralConverter(userInput){
    var romanNumeralOutput = [];
    // if(userInput === 1){
    //   romanNumeralOutput.push("I");
    // }else if (userInput < 4) {
    //   if(userInput === 2){
    //     romanNumeralOutput.push("II");
    //     console.log(romanNumeralOutput);
    //   }else{
    //     romanNumeralOutput.push("III")
    //     console.log(romanNumeralOutput);
    //   };
    // }
    for (var i = userInput; i != 0; i += 0){
      if (userInput >= 1000){
        romanNumeralOutput.push("M");
        var i =  (i - 1000);
        userInput = i;
        console.log(romanNumeralOutput);
      }else if (userInput >= 500){
        romanNumeralOutput.push("D");
        var i = (i - 500);
        userInput = i;
      }else if (userInput >= 100){
        romanNumeralOutput.push("C");
        var i = (i - 100);
        userInput = i;
      }else if (userInput >= 50){
        romanNumeralOutput.push("L");
        var i = (i - 50);
        userInput = i;
      }else if (userInput >= 10){
        romanNumeralOutput.push("X");
        userInput = i;
      }else if (userInput >= 5){
        romanNumeralOutput.push("V");
        userInput = i;
      }
      console.log(romanNumeralOutput);
    }
  }
});
