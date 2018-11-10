// JavaScript Document

if (true || false)
{
    console.log("if any of these is true, this will be outputted");
}

if (true && false)
{
    console.log("This willl only output if both are true");
}

var myMaxLimit = 20;
var myMinLimit = 5;
myValue = 15;

if (myValue < myMaxLimit && myValue > myMinLimit)
{
    console.log("The value " + myValue + " is between " + myMinLimit + " and " + myMaxLimit);
} else {
    console.log("The value " + myValue + " is not between " + myMinLimit + " and " + myMaxLimit);
}

var myMaxXLimit = 5;
var myMinXLimit = 3;
var myMaxYLimit = 3;
var myMinYLimit = 1;

var myXValue = 6;
var myYValue = 2;

if ((myXValue < myMaxXLimit && myXValue > myMinXLimit) && (myYValue < myMaxYLimit && myYValue > myMinYLimit))
{
    console.log("Both X and Y are betewwn the limits");
} else {
    console.log("Either X or Y is NOT betewwn the limits");
}