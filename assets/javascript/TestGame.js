//GLOBAL VARIABLES
//-----------------------------------------

//Crystal Variables
var crystal = {
    purple: 
    {
        name: "Purple",
        value: 0
    },

    opal: 
    {
        name: "Opal",
        value: 0
    },

    rose: 
    {
        name: "Rose",
        value: 0
    },

    blue: 
    {
        name: "Blue",
        value: 0
    },

}

// Scores (Current and Target)
var currentScore    = 0;
var targetScore     = 0;

// Wins and Losses
var winCount        = 0;
var lossCount       = 0;

//FUNCTIONS
//-----------------------------------------
var getRandom = function(min, max) {
    return Math.floor(Math.random() * max) + min;
}

var startGame = function() {

    //reset current score
currentScore = 0;

    //set target sore (between 19 and 120)
//targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    targetScore             = getRandom(19, 120);

    //set different values for each of the crystals (between 1 and 12)
    crystal.purple.value    = getRandom(1, 12);
    crystal.opal.value      = getRandom(1, 12);
    crystal.rose.value      = getRandom(1, 12);
    crystal.blue.value      = getRandom(1, 12);
    
    //Change html to reflect all changes
$("#currentCount").html(currentScore);
$("#totalScore").html(targetScore);

    //TESTING
    //console.log("-------------------------------")
    //console.log("Target Score: " = targetScore);
    console.log("Blue " + crystal.blue.value);
}

//Responds to clicks
var addValues = function(crystal) {

    //Change currentScore
    currentScore = currentScore + crystal.value;

    //Change html to reflect changes in score
    $("#currentCount").html(currentScore);

    //Call the checkWin function
    checkWin();

    //Testing Console
    console.log("Your Score: " + currentScore);
}

//Check if user won or lost and reset the game
var checkWin = function(){

    //Check if currentScore is larger than targetScore
    if(currentScore > targetScore) {
        alert("Sorry better luck next time!");
        console.log("You lost");

        //Add to loss counter
        lossCount++;

        //Change loss count
        $("#lossCounter").html(lossCount);

        //Restart the game
        startGame();
    }

    else if (currentScore === targetScore) {
        alert("You did it!");
        console.log("You won!");

        //Add to win counter
        winCount++;

        //Change loss count
        $("#winCounter").html(winCount);

        //Restart the game
        startGame();

    }
}


//MAIN PROCESS
//-----------------------------------------

//Starts Game the first time
startGame();

$("#purple").click(function() {
    addValues(crystal.purple);
});

$("#opal").click(function() {
    addValues(crystal.opal);
});

$("#rose").click(function() {
    addValues(crystal.rose);
});

$("#blue").click(function() {
    addValues(crystal.blue);
});



