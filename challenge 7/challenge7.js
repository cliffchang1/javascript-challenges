var GG = new Audio("music/GG.mp3")
var crash = new Audio("music/Car-crash.mp3")
var meteor = new Audio("music/meteor.mp3")
var clap = new Audio("music/Clap.mp3")
var daydream = new Audio("music/DJ-stop.mp3")
var volcano = new Audio("music/volcano.mp3")
var Lucifer = new Audio("music/lucifer.mp3")
var diarrhea = new Audio("music/diarrhea.mp3")
var sad = new Audio("music/sad.mp3")
var choose = new Audio("music/choose.mp3")
var flashbang = new Audio("music/flashbang.mp3")
var FBI = new Audio("music/FBI.mp3")
var explosion = new Audio ("music/explosion.mp3")
var text1 = ("Ms. Pomelo has just called you to the office. She gave you two options rather go to grad trip or she'll cancel your recommendation.")
var text2 = ("Unfortunately, you found out that you don't have a girl friend. It was just messages from Siri that you set for yourself. And because you didn't reply the class line on time, you got expel from the school.")
var text3 = ("Pomelo found out that your college doesn't require her recommendation and because you actually have the balls to say 'no' to her, she's impressed by your courage and spare you from grad trip.<br> Now you have to decide what are you going to do for spring break.")
var text4 = ("The bus driver thought he was Vin Diesel and began to drive like Domonic Toretto. Unfortunately, he's not as good as him so the bus crashed into pieces. No one survived. ")
var text5 = ("Luckily, you have survived till the exam day. You've study hard and are prepared for the exam. <br> Now you have to decide what to eat for breakfast. ")
var text6 = ("It's time to choose what game to play ")
var text7 = ("A meteor strucks the planet and vapoize all the living thing. That includes you.")
var text8 = ("The sandwich is too healthy which doesn't get you enough energy. You fell asleep during the test and scored 1 for whatever subject you're studying. You were depressed and decide to suicide.")
var text9 = ("Your mom accidentally drop her laxative into your hamberger. You spend the wholde day in the toilet and missed your exam. You are depressedn and decide to commit suicide.")
var text10 = ("The sound effect of the flashbang from the game caused you a heart attack. Due to the fact, you are the only one home, you died...")
var text11 = ("The FBI bust into the house and arrest you for being an Asian. GG for you")
var text12 = ("At the moment you turn on your computer, the computer exploded because your computer has been switched to a bomb by terrorists. You are targeted as their escape goat for setting of a bomb")
function storyP1(){
    document.querySelector(".container").style.backgroundImage = "url('images/take-me-lucifer.png')"
    document.querySelector(".title").innerHTML = text1
    document.querySelector("#button1").classList.toggle("invis")
    document.querySelector("#button2").classList.toggle("invis")
    document.querySelector("#button3").classList.toggle("invis")
    document.querySelector("#button4").classList.toggle("invis")
}
function storyP2(){
    document.querySelector(".container").style.backgroundImage = "url('images/stop-day-dreaming.jpg')"
    document.querySelector("#button1").classList.toggle("invis")
    document.querySelector("#button2").classList.toggle("invis")
    document.querySelector(".title").innerHTML = text2
    daydream.play()
    setTimeout(function() {GG.play()}, 2000)

}
function storyP3(){
    document.querySelector(".container").style.backgroundImage = "url('images/very-good.gif')"
    document.querySelector("#button3").classList.toggle("invis")
    document.querySelector("#button4").classList.toggle("invis")
    document.querySelector(".title").innerHTML = text3
    document.querySelector("#button5").classList.toggle("invis")
    document.querySelector("#button6").classList.toggle("invis")
    document.querySelector("#button7").classList.toggle("invis")
    clap.play()
}
function storyP4(){
    document.querySelector(".container").style.backgroundImage = "url('images/car-crash.gif')"
    document.querySelector(".title").innerHTML = text4
    document.querySelector("#button3").classList.toggle("invis")
    document.querySelector("#button4").classList.toggle("invis")
    document.querySelector(".container").innerHTML = "<img id='car' src='images/Toretto.jpg'>"
    crash.play()
    setTimeout(function() {GG.play()}, 6000)
}
function storyP5(){
    document.querySelector(".container").style.backgroundImage = "url('images/Sandwich.jpg')"
    document.querySelector("#button5").classList.toggle("invis")
    document.querySelector("#button6").classList.toggle("invis")
    document.querySelector("#button7").classList.toggle("invis")
    document.querySelector("#button8").classList.toggle("invis")
    document.querySelector("#button9").classList.toggle("invis")
    document.querySelector(".title").innerHTML = text5

}
function storyP6(){
    document.querySelector(".container").style.backgroundImage = "url('images/choose.jpg')"
    document.querySelector("#button5").classList.toggle("invis")
    document.querySelector("#button6").classList.toggle("invis")
    document.querySelector("#button7").classList.toggle("invis")
    document.querySelector("#button10").classList.toggle("invis")
    document.querySelector("#button11").classList.toggle("invis")
    document.querySelector("#button12").classList.toggle("invis")
    document.querySelector(".title").innerHTML = text6
    choose.play()
    setTimeout(function() {choose.pause()}, 4500)
}
function storyP7(){
    document.querySelector(".container").style.backgroundImage = "url('images/Asteroid.gif')"
    document.querySelector("#button5").classList.toggle("invis")
    document.querySelector("#button6").classList.toggle("invis")
    document.querySelector("#button7").classList.toggle("invis")
    document.querySelector(".title").innerHTML = text7
    meteor.play()
    setTimeout(function() {meteor.pause()}, 8000)
    setTimeout(function() {GG.play()}, 8000)

}
function storyP8(){
    document.querySelector(".container").style.backgroundImage = "url('images/suicide.gif')"
    document.querySelector(".title").innerHTML = text8

    document.querySelector("#button8").classList.toggle("invis")
    document.querySelector("#button9").classList.toggle("invis")
    sad.play()
}
function storyP9(){
    document.querySelector(".container").style.backgroundImage = "url('images/diarrhea.gif')"
    document.querySelector("#button8").classList.toggle("invis")
    document.querySelector("#button9").classList.toggle("invis")
    document.querySelector(".title").innerHTML = text9
    diarrhea.play()
    setTimeout(function() {GG.play()}, 2100)
}
function storyP10(){
    document.querySelector(".container").style.backgroundImage = "url('images/heartattack.jpg')"
    document.querySelector("#button10").classList.toggle("invis")
    document.querySelector("#button11").classList.toggle("invis")
    document.querySelector("#button12").classList.toggle("invis")
    document.querySelector(".title").innerHTML = text10
    flashbang.play()
    setTimeout(function() {GG.play()}, 2100)
}
function storyP11(){
    document.querySelector(".container").style.backgroundImage = "url('images/FBI.gif')"
    document.querySelector("#button10").classList.toggle("invis")
    document.querySelector("#button11").classList.toggle("invis")
    document.querySelector("#button12").classList.toggle("invis")
    FBI.play()
    setTimeout(function() {GG.play()}, 4100)
    document.querySelector(".title").innerHTML = text11
}
function storyP12(){
    document.querySelector(".container").style.backgroundImage = "url('images/explosion.gif')"
    document.querySelector("#button10").classList.toggle("invis")
    document.querySelector("#button11").classList.toggle("invis")
    document.querySelector("#button12").classList.toggle("invis")
    document.querySelector(".title").innerHTML = text12
    explosion.play()
    setTimeout(function() {GG.play()}, 3000)
    setTimeout(function() {explosion.pause()}, 3000)
}