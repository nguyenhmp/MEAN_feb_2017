
console.log("pokemain.js")

function rand150 = 

var game = {
  players: [],
  addPlayer: function(){
  	players.push(player)
  }
};

function playerConstructor(name){
  player = {};
  player.name = name;
  player.card = null;
  player.addCard = function(card){
    player.hand.push(card);
  };
  return player;
};

$('#new_player').click(function(){
	var player = $('#name').val()
	console.log('form submitted', player)
	$('#name').val("")
	var new_player = playerConstructor(player);
	var rand = (Math.floor(Math.random() * 150) + 1)
	$.get("http://pokeapi.co/api/v1/pokemon/" + rand + "/", function(data){
		console.log("returned data", data)
		$('#cards').append('<h4>Name: ${player}')
		
	})


	game.addPlayer(new_player);
	console.log(game)
	return false

})

