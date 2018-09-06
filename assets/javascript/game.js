

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//     Your game will hide this amount until the player clicks a crystal.
//     When they do click one, update the player's score counter.

// The player wins if their total score matches the random number from the beginning of the game.

// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.
    // function ResetGlobalVariables(){
    // list of all the variables with original attributes here
    // example1 = 1;
    // example2 = 2;
    // example3 = 3;
    //}

//  When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
var randomNumber = Math.floor(Math.random());


// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.


//Button works when clicked (console.log)
//Add value to each crystal button click

$( ".purple" ).click(function(){
    console.log("Purple");
    });

$( ".opal" ).click(function(){
    console.log("Opal");
    });

$( ".rose-quartz" ).click(function(){
    console.log("Rose Quartz");
    });

$( ".tanzanite" ).click(function(){
    console.log("Tanzanite");
    });

    var score;
    var sum;
    for (var i =0; i < 100; i++) {
        sum += i;
    }

    var resetScore = function() {
        score = 0;
        console.log("resetScore");
    }
    

    $(document).ready(
        resetScore
    );

    public class Tester{
        public static void main(String args[]){
            int size=52;
            while(size>0){
                int rando=(int)Math.random()*size;
                size--;
                System.out.println(rando);
            }
        }
    }

    Math.random();
//$(document).ready(function(){
  //  .on("click", function(){});
    

    //function startGame(){

    //}

    // four crystals displayed as buttons.
    //var crystals = [];

   // var randomNumber;

//});