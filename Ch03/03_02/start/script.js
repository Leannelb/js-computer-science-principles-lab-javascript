// JavaScript Document
var myVariable = 5;
var msg = "My variable is equal to " + myVariable + " and is a " + typeof myVariable;
console.log(msg);

//console log type of the varible

myVariable = myVariable.toString();
var msg = "My variable is equal to " + myVariable + " and is a " + typeof myVariable;
console.log(msg);

myVariable = myVariable += 1;
var msg = "My variable is equal to " + myVariable + " and is a " + typeof myVariable;
console.log(msg);

myVariable = Number(myVariable) +1;
var msg = "my variable is equal to " + myVariable + " and is a " + typeof myVariable;
console.log(msg);

//How casting vars to other types works.
//output:
// My variable is equal to 5 and is a number
// script.js:10 My variable is equal to 5 and is a string
// script.js:14 My variable is equal to 51 and is a string
// script.js:18 my variable is equal to 52 and is a number