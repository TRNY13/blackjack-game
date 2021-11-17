let card1 = 10;
let card2 = 11;
let cardSum = card1 + card2;

if (cardSum < 21) {
    console.log("Hit?")
} else if (cardSum === 21) {
    console.log("Blackjack 21!!!")
} else {
    console.log("Busted")
}