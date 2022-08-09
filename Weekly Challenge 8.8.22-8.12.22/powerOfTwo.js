/**
 * Created by: Kyle Stetz
 * Created On: 8/9/22
 * Last Updated: 8/9/22
 */
let number = document.getElementById('divide');                                                             //Get the number to divide by
let power = document.getElementById('power');                                                   //Get the number to raise to the power to
let btn = document.getElementById('btn');                                                                 //Get a reference to the button

btn.addEventListener('click', function(){shiftToRight(number,power)},false);                                  //Create the event listener

function shiftToRight(num,power){                                                                                   //Create the function
    let result;                                                                                             //Create the display variable
    let divider = 2;

    if(power.valueAsNumber <= 0){                                                                    //Make sure the power is not negative
        power = 0;
        divider = 1;
    }if(power.valueAsNumber == 1){                                                                          //Use case if power equals one
        power = 1;
        divider = 2;

    }else{
        for (let index = 1; index < power.valueAsNumber; index++) {                                                 //Raise two to a power
            divider = divider * 2;
            
        }
    }

    result = Math.floor(num.valueAsNumber/divider);                                                                //Make the calculations

    document.getElementById('result').textContent = "The result of your inputs are: " + result;                      //Display the results




}