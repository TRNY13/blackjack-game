//Card values for the game
let card1 = 10;
let card2 = 11;
let cardSum = card1 + card2;

// boolean for if the user gets blackjack
let gotBlackJack = false;
// boolean for if the user's hand goes over 21
let userIsAlive = true;

if (cardSum <= 20) {
    console.log("Hit?");
} else if (cardSum === 21) {
    console.log("Blackjack 21!!!");
    /* the boolean gets turned to true if 
    the user gets blackjack*/
    gotBlackJack = true;
} else {
    console.log("Busted");
    userIsAlive = false;
}

//checking the booleans
console.log(gotBlackJack);
console.log(userIsAlive);