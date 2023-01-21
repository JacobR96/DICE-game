
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage; 


var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



if(randomNumber1 > randomNumber2) {


document.querySelector("h1").innerHTML = "the muthadicker palyer 🍆 1 won Juan";
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML ="player 2 is the biggest hoe ever";
}

else {
    document.querySelector("h1").innerHTML = "Shoot it out because its a draw";
}