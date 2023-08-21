const paper = document.getElementById("paper-button")
const rock = document.getElementById("rock-button")
const scissors = document.getElementById("scissors-button")
const play_again = document.getElementById("play-again")
const pscore = document.getElementById("pscore")
const bscore = document.getElementById("bscore")
const win_text = document.getElementById("win-text")
const again = document.getElementById("again")
const button = document.getElementById("buttons")
const out = document.querySelectorAll(".image")
const arr = [[`<img class = "boutput" src="assets/scissors-hand.png" alt="scissors"></img>`,"scissors"],[`<img class = "boutput" src="assets/rock-hand.png" alt="rock">`,"rock"], [`<img class = "boutput" src="assets/paper-hand.png" alt="paper">`,"paper"]]
var player_score = 0
var bot_score = 0


paper.addEventListener("click",()=>paperOutput())
rock.addEventListener("click",()=>rockOutput())
scissors.addEventListener("click",()=>scissorsOutput())
play_again.addEventListener("click",()=>{
    location.reload()
})




function botOutput(){
    let output = arr[Math.floor(Math.random()*3)]
    out[1].innerHTML = output[0]
    return output
}

function paperOutput(){
    out[0].innerHTML = `<img class="poutput" src="assets/paper-hand.png" alt="paper">`
    let a = botOutput()
    if (a[1] == "scissors"){
        bot_score ++
        bscore.innerText = bot_score
    }else if (a[1] == "rock"){
        player_score ++
        pscore.innerText = player_score
    }
    winCheck(player_score,bot_score)
}

function rockOutput(){
    out[0].innerHTML = `<img  class="poutput" src="assets/rock-hand.png" alt="rock">`
    let a = botOutput()
    if (a[1] == "paper"){
        bot_score ++
        bscore.innerText = bot_score
    }else if (a[1] == "scissors"){
        player_score ++
        pscore.innerText = player_score
    }
    winCheck(player_score,bot_score)
}

function scissorsOutput(){
    out[0].innerHTML = `<img class="poutput" src="assets/scissors-hand.png" alt="scissors">`
    let a = botOutput()
    if (a[1] == "rock"){
        bot_score ++
        bscore.innerText = bot_score
    }else if (a[1] == "paper"){
        player_score ++
        pscore.innerText = player_score
    }
    winCheck(player_score,bot_score)
}

function winCheck(player_score,bot_score){
    if (player_score == 5){
        win_text.innerText = "You won the game !!!"
        again.style.display = "block"
        button.style.display = "none"
    }else if (bot_score == 5){
        win_text.innerText = "Bot won the game !!!"
        again.style.display = "block"
        button.style.display = "none"
    }
}