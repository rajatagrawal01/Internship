// "string", 'string', `string`
// "My Name is 'Harshita'"

// var name='Sneha'
// var a =`Hello ${name}`
// console.log(a);

// document.writeln(a);


// console.log(name.length);


// First:
// S,N,E,H,A == Sneha
// var name="";
// for(i=0;i<5;i++){
//     let temp = prompt("Please enter name");
//     name=name+temp;
// }
// console.log("You entered",name);


// Second:
// Sneha,Ruchi,Harshita,Khushi
// var students=[];
// for(i=0;i<4;i++){
//     let temp = prompt("Please enter name");
//     students.push(temp);
// }
// console.log("You entered : ",students);


var student='      Sneha             '

console.log("using charAt",student.charAt(0));
console.log("using array",student[0]);
console.log("Ascii value of char is : ",student.charCodeAt(0));
console.log("uppercase: ",student.toUpperCase());
console.log("Lowercase: ",student.toLowerCase());
var trimmed = student.trim()
console.log("Without spacing both side: ",student.trim());
console.log("Without spacing in start: ",student.trimStart());
console.log("Without spacing in End: ",student.trimEnd());

console.log("Ascii value of char is : ",trimmed.charCodeAt(0));





