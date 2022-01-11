const dices = document.querySelectorAll(".dice");
const title = document.querySelector("h1");

var dice1 = rollDice();
var dice2 = rollDice();

dices[0].setAttribute("src", "images/dice" + dice1 + ".png");
dices[1].setAttribute("src", "images/dice" + dice2 + ".png");

if(dice1 > dice2){
  title.innerHTML = "Il giocatore 1 ha vinto!";
} else if(dice1 === dice2){
  title.innerHTML = "Pareggio!";
} else{
  title.innerHTML = "Il giocatore 2 ha vinto!";
}


function rollDice(){
  var n = Math.random();
  n = Math.floor(n * 6) + 1;
  return n;
}
