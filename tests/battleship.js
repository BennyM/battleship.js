var battleship = require("../lib/battleship.js");
var assert = require("assert");

module.exports.addPlayer_NoPlayers_PlayerIsAdded = function(){
	var game = battleship.createGame();
	var player = { name : "Benny" };
	
	game.addPlayer(player);

	assert.equal(1, game.numberOfPlayers());
}

module.exports.addPlayer_TwoPlayersInGame_ExcepionThrown = function(){
	var game = battleship.createGame();
	var player = { name: "Benny"};
	var otherPlayer = { name: "Ynneb"};
	game.addPlayer(player);
	game.addPlayer(otherPlayer);

	assert.throws(function(){
			game.addPlayer({name: "I should not be added}"});
		     });
}

module.exports.addShip_noShipsOnBoard_shipIsPlaced = function(){
	var game = battleship.createGame();
	var player = { name: "Benny"};
	game.addPlayer(player);
	
	game.addShip("cruiser",{x:"A", y:"1", orientation: "vertical" }, player);

	assert.equal(true, game.shipAt(player, {x: "A", y:"1"}));
	assert.equal(true, game.shipAt(player, {x: "A", y:"2"}));
	assert.equal(true, game.shipAt(player, {x: "A", y:"3"}));
}
