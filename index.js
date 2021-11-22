//cards
let cardsArray = [];
let cardSum = 0;

// boolean for if the user gets blackjack
let gotBlackJack = false;
// boolean for if the user's hand goes over 21
let userIsAlive = false;
let message = " ";

// grabbing the elemnts from html that will need
// to be changed throughout the game and storing the info into js
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// user object
let player = {
    name: "Ash Ketchum",
    chips: 150
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

// checking to see if the array is empty before the user starts
// the game
console.log(cardsArray);

// callRandomCard uses function decleration, allows it to automatically
// get hoisted to the top of the code
function callRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

let startGame = () => {
  let card1 = callRandomCard();
  let card2 = callRandomCard();
  cardsArray = [card1, card2];
  cardSum = card1 + card2;
  userIsAlive = true;
  renderGame();
};

let renderGame = () => {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cardsArray.length; i++) {
    cardsEl.textContent += cardsArray[i] + " ";
  }

  sumEl.textContent = "Sum: " + cardSum;
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
  console.log(cardsArray);
};

let newCard = () => {
  if (userIsAlive === true && gotBlackJack === false) {
    console.log("Getting dealt a new card");
    let card = callRandomCard();
    cardSum += card;
    cardsArray.push(card);
    renderGame();
  }
};
