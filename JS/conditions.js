// var marks=90

// if(a>18){
//     console.log("Person is eligible for driving");
// }
// else if(a==18){
//     console.log("Person is eligible for learning licence");
// }
// else{
//         console.log("Person is not eligible for driving");
// }

// if(marks>=33){
//     if(marks>=60 && marks<75){
//         console.log("Passed with first divison");
//     }
//     else if(marks>=75 && marks<90){
//         console.log("Passed with distinction");
//     }
//     else if(marks>=90){
//         console.log("Merit");
//     }
//     else{
//         console.log("Passed");
//     }
// }
// else{
//     console.log("Failed")
// }

// var a='Dog';
// var b = (a=='Dog') ? "Dog": "not dog" //ternary operator
// console.log(b);


//ternary operator
// syntax: condition ? value_if_condition_satisfies : value_if_false

//Switch case

var day = parseInt(prompt("Enter a number between 1 and 7 to get the day of the week:"));
switch(day){
    case 1:
        console.log("Monday"); //operation
        break; //break
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}