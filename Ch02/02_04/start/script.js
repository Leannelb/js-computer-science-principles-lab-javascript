// JavaScript Document
//Customising functions with parameters
// Create the game score
var myScore;

// Setup and change the game score
init(1000);
//now im initalising newScore to 1000, without this we get NAN in console as the value was newver initalised
changeScore(100);
changeScore(50);
changeScore(-250);
changeScore(125);

// Function to initialize the game score in the game
function init(newScore)
{
    console.log("Setting the score to: " + newScore);
    myScore = newScore;
    displayScore();
}

// Function to change the score of the game
function changeScore(scoreDelta)
// Delta is a var name that can be used for the life of a function
// Delta reffers to the amount of change - either up or down, its a common keyword for this
{
    console.log("I am changing the score by: " + scoreDelta + " and the score before the changeScore function call is: " + myScore);
    myScore = myScore + scoreDelta;
    console.log('The new score is: ' + myScore + ' and the increment is still ' + scoreDelta);
}

function displayScore()
{
    console.log("Player Score: " + myScore)
}