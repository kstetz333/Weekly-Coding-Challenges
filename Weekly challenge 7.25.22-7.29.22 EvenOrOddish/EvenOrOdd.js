/*
get number from input box 
store number in variable
get seperate each 0-9 number
add them together
if result % 2 = 1 then oddish else evenish

 */
let number = document.getElementById('num');// get number from input box
console.log("Their number is: " + number);
let btn = document.getElementById('evenOrOdd');
btn.addEventListener('click',function(){evenOrOdd(number),false});
function evenOrOdd(number){
    let numArray = number.value;
    console.log("I'm in the function");
    console.log("Your number is: " + number.value + " or is it " + number.valueAsNumber + " or is it " + numArray[0]);
    let numCounter = 0;
    let result;
    for(let i = 0; i < numArray.length; i++){
        numCounter = numCounter + parseInt(numArray[i],10);
        console.log("Current number total is: " + numCounter);
    }
    if(numCounter % 2 == 0){
        result = "Evenish";
    }else{
        result = "Oddish";
    }
    document.getElementById('result').innerHTML = "You number is " + result;

}