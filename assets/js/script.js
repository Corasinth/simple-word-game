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

getElementById("start").addEventListener("click")
    document.body.addEventListener("keypress", function (event){
    userKey = event.key;
    if (allChar.includes(event.key) === true) {
        switch(userKey){
            case"s":
            getElementById("letters").textcontent = " s "
            break;
            case"e":
            getElementById("letters").textcontent = " e "
            break;
            case"v":
            getElementById("letters").textcontent = " v "
            break;
            case"n":
            getElementById("letters").textcontent = " n "
            break;
            case"t":
            getElementById("letters").textcontent = " t "
            break;
        }
        


    }
})
