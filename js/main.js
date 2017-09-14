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
        var rand = Math.floor(Math.random() * (52 * decks));

        chute[i] = chute[rand];
        chute[rand] = temp;
    }
}
loadChute(1);
// console.log(chute);
shuffleChute(2);
// console.log(chute;



//need players
var players = {
    "house": [],
    "player1": [],
}

var addition = function(hand) {
    loadChute(1);
    shuffleChute(2);
    var total = 0;
    for (var i = 0; i < hand.length; i++) {
        switch (hand[i][0]) {
            case "A": 
                    // ace will have 2 possible points 1 || 11
                break;
            case "J":
                break;
            case "Q":
                break;
            case "K":
                break;
            default:
        }
    }
}

