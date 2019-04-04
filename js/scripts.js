//* front end logic *//
$(document).ready(function(){
  var romanNumeralOutput = [];
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("input#userNumber").val();
    var arrayNumerals = userInput.split("");
    console.log(arrayNumerals);
    romanNumerals(userInput);
    romanNumeralConverter(romanNumerals);
  })



//* back end logic *//
  function romanNumerals(userInput){
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
      }else if (userInput >= 500){
        if(userInput >= 900){
          romanNumeralOutput.push("CM");
          var i = (i - 900);
          userInput = i;
        }else{
          romanNumeralOutput.push("D");
          var i = (i - 500);
          userInput = i;
        }
      }else if (userInput >= 100){
        if(userInput >= 400){
          romanNumeralOutput.push("CD");
          var i = (i - 400)
          userInput = i;
        }else{
          romanNumeralOutput.push("C");
          var i = (i - 100);
          userInput = i;
        }
      }else if (userInput >= 50){
        if(userInput >= 90){
          romanNumeralOutput.push("XC");
          var i = (i - 90)
          userInput = i;
        }else{
          romanNumeralOutput.push("L");
          var i = (i - 50);
          userInput = i;
        }
      }else if (userInput >= 10){
        if (userInput >= 40){
          romanNumeralOutput.push("XL")
          var i = (i - 40)
          userInput = i;
        }else{
          romanNumeralOutput.push("X");
          var i = (i - 10);
          userInput = i;
        }
      }else if (userInput >= 5){
        if (userInput >= 9){
          romanNumeralOutput.push("IX")
          var i = (i - 9)
          userInput = i;
        }else{
          romanNumeralOutput.push("V");
          var i = (i - 5);
          userInput = i;
        }
      }else if (userInput >= 4){
          romanNumeralOutput.push("IV")
          var i = (i - 4)
          userInput = i;
        }else{
          romanNumeralOutput.push("I")
          var i = (i - 1)
          userInput = i;
        }
        console.log(romanNumeralOutput);
      }
    }

    function romanNumeralConverter(){}

  });
