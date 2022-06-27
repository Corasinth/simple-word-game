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

var timeLeft = 3

var seconds = document.getElementById("seconds")


document.getElementById("start").addEventListener("click", function () {
    var timeInterval = setInterval(function () {
        timeLeft--;
        seconds.textContent = timeLeft;
    
      if (timeLeft === 0) {
        clearInterval (timeInterval)
        document.write ("you lose")
      }
      }, 1000);
    })

    document.body.addEventListener("keypress", function (event){
    userKey = event.key;
    console.log (userKey)
        switch(userKey){
            case"s":
            document.getElementById("s").textContent = "s"
            console.log("you pressed s")
            break;
            case"e":
            var eArray = document.getElementsByClassName("e")
            for (var i =0; i<eArray.length; i++)
                eArray[i].textContent = "e"
            break;
            case"v":
            document.getElementById("v").textContent = "v"
            break;
            case"n":
            var nArray = document.getElementsByClassName("n")
            for (var i =0; i<nArray.length; i++)
            nArray[i].textContent = "n"
            break;
            case"t":
            document.getElementById("t").textContent = "t"
            break;
    }
})
