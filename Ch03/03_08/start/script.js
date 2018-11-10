// JavaScript Document

var myArray = ["Doug", "Mike", "Janet", "Matt"];

for (var i = 0; i < myArray.length; i++)
{
    console.log("Hello " + myArray[i]);
}
// Both the above and below loop through the array displaying the results

for (var element of myArray)
{
    console.log("Goodbye " + element);
}
// OUTPUT: 
// Hello Doug
// script.js:7 Hello Mike
// script.js:7 Hello Janet
// script.js:7 Hello Matt
// script.js:13 Goodbye Doug
// script.js:13 Goodbye Mike
// script.js:13 Goodbye Janet
// script.js:13 Goodbye Matt