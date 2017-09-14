/*Stack is for the deck and the array of cards in them. also the shuffle
function will be placed here*/

//this function will go into the block where the card will be dealt after 'playerBet' = true; 
//eventHandler will trigger when player takes action.
// var deck = document.getElementById('decks');

//make object stack => deck of cards
// var makeDeck = () => {
	// function stackMakeDeck(n) {
	//n is the number of decks we want to use.
	 /* var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9",
	                        "10", "J", "Q", "K"];
	  var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
	  var i, j, k;
	  var allCards = ranks.length * suits.length
	   // Set array of cards.

	  this.decks = (n * allCards);


	  // Fill the array with 'n' packs of cards.

	  for (i = 0; i < n; i++)
	    for (j = 0; j < suits.length; j++)
	      for (k = 0; k < ranks.length; k++)
	        this.cards[i * allCards + j * ranks.length + k] = (ranks[k], suits[j]);
	  
	      console.log(this.cards);
	}*/
	
// }
function Deck() {
    this.cards = [];
    this.cardsDrawn = 0;
    var suits = ["spades", "diamonds", "hearts", "clubs"];
    var names = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
    for (var suit in suits) {
        for (var name in names) {
            this.cards.push(new Card(names[name], suits[suit]));
        }
    }
}

Deck.prototype.getCard = function () {
    if (this.cards.length == this.cardsDrawn) {
        return null;
    } //case: check if all cards drawn

    var random = Math.floor(Math.random() * (this.cards.length - this.cardsDrawn));
    var temp = this.cards[random];

    //swap chosen card with card last in array
    this.cards[random] = this.cards[this.cards.length - this.cardsDrawn - 1];
    this.cards[this.cards.length - this.cardsDrawn - 1] = temp;
    this.cardsDrawn++;

    return temp;
};
console.log(this.cards);
