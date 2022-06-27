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
var pressStart = false 
var timeLeft = 5
var count = 0
var seconds = document.getElementById("seconds")

loss = 0
win = 0

function init () {
    if (localStorage.getItem("win") !== 0)
    document.getElementById ("wins").textContent = localStorage.getItem ("win")
    win = JSON.parse (localStorage.getItem ("win"))
    if (localStorage.getItem("win") !== 0)
    document.getElementById ("losses").textContent = localStorage.getItem ("loss")
    loss = JSON.parse(localStorage.getItem ("loss"))
}

init()


document.getElementById("start").addEventListener("click", function () {
    pressStart = true
    var timeInterval = setInterval(function () {
        timeLeft--;
        seconds.textContent = timeLeft;
    
      if (timeLeft === 0 && count < 5) {
        clearInterval (timeInterval)
        document.getElementById("letters").textContent = "You lose"
        loss+=1
        localStorage.setItem("loss", loss)
        document.getElementById ("losses").textContent = JSON.parse(localStorage.getItem ("loss"))
      } else if (count > 5) {
        clearInterval (timeInterval)
        document.getElementById("letters").textContent = "You Win"
        win+=1
        localStorage.setItem("win", win+=1)
        document.getElementById ("wins").textContent = JSON.parse(localStorage.getItem ("win"))
      }
      }, 1000);
    })

    document.body.addEventListener("keypress", function (event){
    if (pressStart === true) {
    userKey = event.key;
    console.log (userKey)
        switch(userKey){
            case"s":
            document.getElementById("s").textContent = "s"
            count+=1;
            console.log (count)
            break;
            case"e":
            var eArray = document.getElementsByClassName("e")
            count+=1;
            console.log (count)
            for (var i =0; i<eArray.length; i++)
                eArray[i].textContent = "e"
            break;
            case"v":
            document.getElementById("v").textContent = "v"
            count+=1;
            console.log (count)
            break;
            case"n":
            var nArray = document.getElementsByClassName("n")
            for (var i =0; i<nArray.length; i++)
            nArray[i].textContent = "n"
            count+=1;
            console.log (count)
            break;
            case"t":
            document.getElementById("t").textContent = "t"
            count+=1;
            console.log (count)
            break;
    }
    }
})
