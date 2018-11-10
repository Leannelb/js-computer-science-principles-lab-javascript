// JavaScript Document
var myValue = 0;

while (myValue < 100)
{
    if (myValue % 9 == 0 ){
        console.log(myValue);
    }

    myValue ++;
    // SAME AS:
    // myValue = myValue +1;
    // myValue += 1;
}

var myBadValue = 0;

do
{
    console.log("This will run at least once");
} while (myBadValue !=0);