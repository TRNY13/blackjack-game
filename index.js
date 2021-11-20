//Card values for the game
let card1 = 10;
let card2 = 11;
let cards = [card1, card2];
let cardSum = card1 + card2;
// boolean for if the user gets blackjack
let gotBlackJack = false;
// boolean for if the user's hand goes over 21
let userIsAlive = true;
let message = " ";
// grabbing message-el from html and storing the info into js
let messageEl = document.getElementById("message-el");

let sumEl = document.getElementById("sum-el");

let cardsEl = document.getElementById("cards-el");

let startGame = () => {
    renderGame();
}

let renderGame = () => {

sumEl.textContent = "Sum: " + cardSum;
cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];

  if (cardSum <= 20) {
    message = "Hit?";
  } else if (cardSum === 21) {
    message = "Blackjack 21!!!";
    /* the boolean gets turned to true if 
    the user gets blackjack*/
    gotBlackJack = true;
  } else {
    message = "Busted";
    userIsAlive = false;
  }

messageEl.textContent = message;
}

let newCard = () => {
    console.log("Drawing a new card!");
    let card = 2;
    cardSum += card;
    renderGame();
}