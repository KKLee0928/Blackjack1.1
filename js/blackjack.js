/*After player places bet, dealer will deal the player one card face up then deal themself a card => this happens twice.

 dealer's second card stays faced down and flips the first card face up to the player. 

Player always gets the first card. 

dealer does not reveal the card value until the player has finished making all the moves in that round.
*/

//need to set up house rules separate from player. dealer will have auto rules.
 
//keeping track of cards
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
                    // players.push(11);
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
console.log(players);

//players will console log { house: [], player:[] }
//which means the hands will go inside the value of the key.