// Ekapob Ukritnukun
// ThaiGQ@gmail.com

// Create a Deck object constructor. A deck should have the following functionality:
//
// The Deck should contain the 52 standard cards
// The Deck should be able to shuffle
// The Deck should be able to reset
// The Deck should be able to deal a random card
// Deal should return the card that was dealt and remove it from the deck

function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;

    this.show = function () {
        console.log(this.rank + " of " + this.suit);
        return this
    }

    return this
}

function DeckConstructor() {
    var suits = ["c", "d", "h", "s"];
    var ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    var deck = [];
    var remaining_Deck;
    var counter;

    this.create = function () {
        counter = 0;
        for (var i = 0; i < suits.length; i++) {
            for (var k = 0; k < ranks.length; k++) {
                deck[counter] = new Card(suits[i], ranks[k]);
                counter++;
            }
        }
        remaining_Deck = deck.length;

        return this
    }

    this.shuffle = function () {
        var remaining_Cards = remaining_Deck;
        var random_Card;
        var current_Card;

        // While there remain elements to shuffle…
        while (remaining_Cards) {

            // Pick a remaining element…
            random_Card = Math.floor(Math.random() * remaining_Cards--);

            // And swap it with the current element.
            current_Card = deck[remaining_Cards];
            deck[remaining_Cards] = deck[random_Card];
            deck[random_Card] = current_Card;
        }

        return deck;
        }

    this.reset = function () {
        this.create();

        return this
    }

    this.deal = function () {
        if (remaining_Deck < 1) {
            return console.log("Deck is empty! All cards have been drawn. Please reset the deck... And don't forget to shuffle it!")
        }

        top_card = deck.pop();
        remaining_Deck--;
        console.log(top_card);
        console.log(remaining_Deck);

        return top_card;
    }

    return this
}

var deck = DeckConstructor();
deck.create();
deck.shuffle();
// deck.reset();
deck.deal();
deck.deal();
deck.deal();


// Now create a Player object constructor. A Player should have the following functionality:
//
// The Player should have a name
// The Player should have a hand
// The Player should be able to take a card (use the deck.deal method)
// The Player should be able to discard a card

function PlayerConstructor (name) {
    this.name = name;
    this.hand = [];
    this.num_cards = this.hand.length;

    this.draw = function (deck) {
        this.hand[this.num_cards] = deck.deal();
        this.num_cards = this.hand.length;
        return this
    }

    this.discard = function (value) {
        this.hand.splice(value-1, 1);
        this.num_cards = this.hand.length;
        return this
    }
}

var Ekapob = new PlayerConstructor(Ekapob);
Ekapob.draw(deck);
Ekapob.draw(deck);
console.log(Ekapob.hand);
Ekapob.discard(1);
console.log(Ekapob.hand);

// Optional:
//
// Create a blackjack game with your deck of cards!
