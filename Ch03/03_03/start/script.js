// JavaScript Document

var knowJS = true; //no quotes must be lowercase
console.log("The variable knowJS is equal to " + knowJS + " and has a type of " + typeof knowJS);
// Prints: The variable knowJS is equal to true and has a type of boolean

//know JS is true its a boolean
if (knowJS)
{
    console.log("I know javascript");
}

var myValue = 5;
console.log("My value is equal to 5");

if (myValue == 5)
{
    console.log("This condition  (myValue == 5) is true");
}

if (myValue < 5)
{
    console.log("This condition (myValue < 5) is true");
} else {
    console.log("This condition is false");
}

if (myValue >= 1)
{
    console.log("This condition (myValue >= 1) is true");

    if (myValue <= 5)
    {
        console.log("This condition (myValue <= 5) is true " );
    }
}

// OUTPUT:
// The variable knowJS is equal to true and has a type of boolean
// script.js:10 I know javascript
// script.js:14 My value is equal to 5
// script.js:18 This condition  (myValue == 5) is true
// script.js:25 This condition is false