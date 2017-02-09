function GameConstructor(consumerPrice,dealerCost,name, inStock){

  var ConsumerCost = ConsumerCost;
  var dealerCost = dealerCost;
  var ourGame = {};


  // ourGame.consumerPrice = consumerPrice;
  // We are making consumerPrice as public
  ourGame._name = name;
  ourGame.type = 'board game';
  ourGame.player = [];


  ourGame.addPlayer = function(player_name){
    ourGame.player.push(player_name);
  }
  ourGame.showPrivateVariables = function(){   // The object wouldn't return the private varuables..
    console.log(dealerCost);
    console.log(consumerPrice);
  }


  function myPrivateFunction(){
    console.log('hello, I am going to create a new object when I am returned!');
  }


  myPrivateFunction();
  return ourGame;
}

var chess = new GameConstructor('$15.00','$5.00','Chess','Yes');
// console.log(chess.type);
// console.log(chess._name);
// console.log(chess.player);
chess.addPlayer('Udaya')
chess.addPlayer('Dudley')
chess.addPlayer('Vernon')
// console.log(chess.player);
chess.showPrivateVariables();

console.log (chess);
