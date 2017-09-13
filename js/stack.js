//Stack is for the deck and the array of cards in them. also the shuffle
//function will be placed here

// Deck has: Cards

function game() {
    this.currentTurnIndex = 0;
    this.deck = new Deck();
}

//make object stack => deck of cards
var stack = [

	{'Ace-11', 'Hearts', 'card img: insert-url'},
	{'King', 'Hearts', 'card img: insert-url'},
	{'Queen', 'Hearts', 'card img: insert-url'},
	{'Jack', 'Hearts', 'card img: insert-url'},
	{'10', 'Hearts', 'card img: insert-url'},
	{'9', 'Hearts', 'card img: insert-url'},
	{'8', 'Hearts', 'card img: insert-url'},
	{'7', 'Hearts', 'card img: insert-url'},
	{'6', 'Hearts', 'card img: insert-url'},
	{'5', 'Hearts', 'card img: insert-url'},
	{'4', 'Hearts', 'card img: insert-url'},
	{'3', 'Hearts', 'card img: insert-url'},
	{'2', 'Hearts', 'card img: insert-url'},
	{'Ace-1', 'Diamonds', 'card img: insert-url'},
	{'Ace-11', 'Diamonds', 'card img: insert-url'},
	{'King', 'Diamonds', 'card img: insert-url'},
	{'Queen', 'Diamonds', 'card img: insert-url'},
	{'Jack', 'Diamonds', 'card img: insert-url'},
	{'10', 'Diamonds', 'card img: insert-url'},
	{'9', 'Diamonds', 'card img: insert-url'},
	{'8', 'Diamonds', 'card img: insert-url'},
	{'7', 'Diamonds', 'card img: insert-url'},
	{'6', 'Diamonds', 'card img: insert-url'},
	{'5', 'Diamonds', 'card img: insert-url'},
	{'4', 'Diamonds', 'card img: insert-url'},
	{'3', 'Diamonds', 'card img: insert-url'},
	{'2', 'Diamonds', 'card img: insert-url'},
	{'Ace-1', 'Spades', 'card img: insert-url'},
	{'Ace-11', 'Spades', 'card img: insert-url'},
	{'King', 'Spades', 'card img: insert-url'},
	{'Queen', 'Spades', 'card img: insert-url'},
	{'Jack', 'Spades', 'card img: insert-url'},
	{'10', 'Spades', 'card img: insert-url'},
	{'9', 'Spades', 'card img: insert-url'},
	{'8', 'Spades', 'card img: insert-url'},
	{'7', 'Spades', 'card img: insert-url'},
	{'6', 'Spades', 'card img: insert-url'},
	{'5', 'Spades', 'card img: insert-url'},
	{'4', 'Spades', 'card img: insert-url'},
	{'3', 'Spades', 'card img: insert-url'},
	{'2', 'Spades', 'card img: insert-url'},
	{'Ace-1', 'Spades', 'card img: insert-url'},
	{'Ace-11', 'Clubs', 'card img: insert-url'},
	{'King', 'Clubs', 'card img: insert-url'},
	{'Queen', 'Clubs', 'card img: insert-url'},
	{'Jack', 'Clubs', 'card img: insert-url'},
	{'10', 'Clubs', 'card img: insert-url'},
	{'9', 'Clubs', 'card img: insert-url'},
	{'8', 'Clubs', 'card img: insert-url'},
	{'7', 'Clubs', 'card img: insert-url'},
	{'6', 'Clubs', 'card img: insert-url'},
	{'5', 'Clubs', 'card img: insert-url'},
	{'4', 'Clubs', 'card img: insert-url'},
	{'3', 'Clubs', 'card img: insert-url'},
	{'2', 'Clubs', 'card img: insert-url'},
	{'Ace-1', 'Clubs', 'card img: insert-url'}
]
// or i can try...
//mayby I dont havbe to list out the entire list of cars as key value pair
function stackMakeDeck(n) {

  var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9",
                        "10", "J", "Q", "K");
  var suits = new Array("Hearts", "Diamonds", "Spades", "Clubs");
  var i, j, k;
  var m;

  m = ranks.length * suits.length
   // Set array of cards.

  this.cards = new Array(n * m);

  // Fill the array with 'n' packs of cards.

  for (i = 0; i < n; i++)
    for (j = 0; j < suits.length; j++)
      for (k = 0; k < ranks.length; k++)
        this.cards[i * m + j * ranks.length + k] =
          new Card(ranks[k], suits[j]);
}