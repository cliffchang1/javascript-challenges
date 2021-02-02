var homescore = 0
var visitorscore = 0
var period = 0
let penalty1
let penalty2
function addHomeScore(){
    homescore = homescore + 1
    document.querySelector(".home-score").innerHTML = homescore
   }
function deductHomeScore(){ if(homescore > 0)
    {homescore = homescore- 1}
    document.querySelector(".home-score").innerHTML = homescore
   }
   function addVisitorScore(){
    visitorscore = visitorscore + 1
    document.querySelector(".guest-score").innerHTML = visitorscore
   }
function deductVisitorScore(){if(visitorscore > 0)
    {visitorscore = visitorscore - 1}
    document.querySelector(".guest-score").innerHTML = visitorscore
   }
function addHomePenalty(){
    penalty1 = prompt("Who is going to jail?")
    document.querySelector(".player-1").innerHTML = penalty1
}
function deleteHomePenalty(){
    document.querySelector(".player-1").innerHTML = ""
}
function addVisitorPenalty(){
    penalty2 = prompt("Who is going to jail?")
    document.querySelector(".player-2").innerHTML = penalty2
}
function deleteVisitorpenalty(){
    document.querySelector(".player-2").innerHTML = ""
}
function addPeriod(){if(period < 3)
    {period = period + 1}
    document.querySelector(".period-block").innerHTML = period
}
function deductPeriod(){if(period > 1)
    {period = period - 1}
    document.querySelector(".period-block").innerHTML = period
}
function reset(){
    document.querySelector(".home-score").innerHTML = ""
    document.querySelector(".guest-score").innerHTML = ""
    document.querySelector(".period-block").innerHTML = ""
    document.querySelector(".player-1").innerHTML = ""
    document.querySelector(".player-2").innerHTML = ""
}