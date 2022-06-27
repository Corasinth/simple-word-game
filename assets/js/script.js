//Event listener on a button to start a timer/start the game, also resets timer 

//A timer 

//Ability to log keypress. 

//Need a way to store a word (array probably)

//If key press is in a specified word, those letters show up

//Store wins and losses in local storage

//Display wins and losses from local storage

//Game win condition when word is guessed, and message of winning is displayed

//Game loss condition when timer runs out and word is not guessed, and message of losing is displayed 


var allChar = ["s", "e", "v", "e", "n", "t", "e", "e", "n"]
var userKey


//getElementById("start").addEventListener("click")
    document.body.addEventListener("keypress", function (event){
    userKey = event.key;
    console.log (userKey)
        switch(userKey){
            case"s":
            document.getElementById("s").textcontent = "s"
            break;
            case"e":
            document.getElementsByClassName("e").textcontent = "e"
            break;
            case"v":
            document.getElementById("v").textcontent = "v"
            break;
            case"n":
            document.getElementsByClassName("n").textcontent = "n"
            break;
            case"t":
            document.getElementById("t").textcontent = "t"
            break;
        
        
    }
})
