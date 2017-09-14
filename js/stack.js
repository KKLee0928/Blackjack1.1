/*Stack is for the deck and the array of cards in them. also the shuffle
function will be placed here*/

//this function will go into the block where the card will be dealt after 'playerBet' = true; 
//eventHandler will trigger when player takes action.
// var deck = document.getElementById('decks');

//make object stack => chute

// Fill the array with '' packs of cards.
var chute = [];
var decks = 1;

var cardNumbers = [
    'A','2','3','4','5','6','7','8','9','10','J','Q','K'
];

var cardSuits = [
    'heart','diamond','clover','spade'
];

var loadChute = function() {
    //Generates this many decks.
    for (var d = 0; d < decks; d++) {
        //Iterating through suits.
        for (var s = 0; s < 4; s++) {
            //Iterating through numbers.
            for (var n = 0; n < 13; n++) {
                chute.push(
                    {
                        'suit': cardSuits[s],
                        'number': cardNumbers[n]
                    }
                )
            }
        }
    }
}

var shuffleChute = function() {
    for (var i = 0; i < 52*decks; i++) {
        var temp = chute[i];
        //look into the Math functions. They're built into Javascript. Math.random() generates a random float point number between 0(inclusive) and 1(exclusive). Math.floor() rounds down to the nearest whole number.
        var rand = Math.floor(Math.random() * (52 * decks));

        chute[i] = chute[rand];
        chute[rand] = temp;
    }
}

loadChute(1);
// console.log(chute);
shuffleChute(2);
console.log(chute);

