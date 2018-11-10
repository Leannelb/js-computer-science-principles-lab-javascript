// JavaScript Document

//capture user input

function init()
{
    document.getElementById('textOutput').innerHTML = "Enter your name then click the button";
}

function clickButton()
{
    var name = document.getElementById("textEntry").value;
    //searches for an id of textEntry, hence why we called textarea id="textEntry"> so we can access and change values inside it
    //.value
    //chaning commands - powerful js tool getElementById returns an object, you can then execute something on this

    document.getElementById("textOutput").innerHTML = createGreeting(name);
}

function createGreeting(newName)
{
    var greeting = "Hello, " + newName + "!";
    return greeting;
}