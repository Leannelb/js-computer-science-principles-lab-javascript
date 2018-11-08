// JavaScript Document

// Create variable outside of a function
var outsideValue = 5;
//because this was defined outside the function it can be accessed from WITHIN the fucntion

// Output variables to the console
//console.log("From outside: outsideValue = " + outsideValue);
//console.log("From outside: functionValue = " + functionValue);
// gives error: script.js:8 Uncaught ReferenceError: functionValue is not defined
// at script.js:8 because of the scope of the functionValue

myFunction();

//myOtherFunction();

function myFunction()
{
    // Create variable insode of a function
    var functionValue = 10;
    console.log("Hey");

    // Output variables to the console
    console.log("From inside: outsideValue = " + outsideValue);
    console.log("From inside: functionValue = " + functionValue);
}

function myOtherFunction()
{
    // Output variables to the console
    console.log("From inside: outsideValue = " + outsideValue);
    console.log("From inside: functionValue = " + functionValue);
}