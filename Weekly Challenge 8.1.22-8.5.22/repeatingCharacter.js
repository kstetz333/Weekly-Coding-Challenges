/**
 * Created by: Kyle Stetz
 * Created on: 8/3/2022
 * Last Updated on: 8/3/2022
 */
let char = document.getElementById('char');                                                                 //get the character
let num = document.getElementById('num');                                                                   // get the number to repeat
let btn = document.getElementById('btn');                                                                   //get the button reference

btn.addEventListener('click', function () {                                                 //add the event listener and call the function
    repeatChar(char, num)
},false);

function repeatChar(char, num) {                                                            //create the function to repeat the character

    let result = "";                                                                                //create the variable to hold the new string

    if (num.valueAsNumber < 0) {                                                                //check for negative numbers 
        num.valueAsNumber = 0;                                                                  //if negative change to 0
    }

    for(let i = 0; i < num.valueAsNumber;i++ ){                                                 //loop the number of N times
        result+=char.value;                                                                     //add the char to the new string 
    }

    document.getElementById('result').textContent = "The character repeated " + result;        //display the new string
}