/*
get number from input box 
store number in variable
get seperate each 0-9 number
add them together
if result % 2 = 1 then oddish else evenish

 */
let number = document.getElementById('num');                        // get number from input box
let btn = document.getElementById('evenOrOdd');                     // get reference to button

btn.addEventListener('click',function(){evenOrOdd(number),false});  // add an event listener for button
                                                                    
function evenOrOdd(number){                                         // create function to calculate even or oddish
    let numArray = number.value;                                    // get the number in an array
    let numCounter = 0;                                             //set a counter to add all the numbers together
    let result;                                                     //declare a variable to determine if numCounter is Evenish or Oddish
    for(let i = 0; i < numArray.length; i++){                       // iterate through numArray
        numCounter = numCounter + parseInt(numArray[i],10);         // add each number together needed to type cast the array                                                            
    }                                                               //from a string to a number using parseInt()


    if(numCounter % 2 == 0){                                        // determine if the input number is evenish or oddish
        result = "Evenish";
    }else{
        result = "Oddish";
    }
    document.getElementById('result').innerHTML = "You number is " + result;        // display the result on the HTML page

}