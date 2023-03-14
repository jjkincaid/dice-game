var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImages1 = "images/dice"+ randomNumber1 +".png";
var randomImages2 = "images/dice"+ randomNumber2 +".png";

document.querySelector(".img1").setAttribute("src",randomImages1);
document.querySelector(".img2").setAttribute("src",randomImages2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

else if (randomNumber1 === randomNumber2 ) {
    document.querySelector("h1").innerHTML = "Draw!";
}
