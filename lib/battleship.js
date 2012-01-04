var battleship = {
  xPositions : ["A", "B", "C", "D", "E", "F", "G","H", "I", "J"],
  yPositions : ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],

createCoordinates : function(placeOnBoard, length){
  var coordinates = [];
  if(placeOnBoard.orientation == "vertical"){
    var shipYPositions = this.yPositions.slice(this.yPositions.indexOf(placeOnBoard.y), length);
    for(var yPosition in shipYPositions){
      coordinates.push({x: placeOnBoard.x, y: shipYPositions[yPosition]});
    }
    return coordinates;
  }else{
    var shipXPositions = this.xPositions.slice(this.xPositions.indexOf(placeOnBoard.x), length);
    for(var xPosition in shipXPositions){
      coordinates.push({x: shipXPositions[xPosition], y: placeOnBard.y});
    }
    return coordinates;
  }
},

createShip : function(name, placeOnBoard){
  if(name === "cruiser"){
    return {
      name: "Cruiser",
      length: 3,
      coordinates : this.createCoordinates(placeOnBoard, 3)
    };
  }
}

};


module.exports.createGame = function (){
	var players = [];
	var ships = [];
	var game = {
		addPlayer : function(player){
			if(players.length < 2){
				players.push(player);
			}else{
				throw{
					message : "Only two players are allowed."
				}
			}
			
		},
		numberOfPlayers : function(){
			return players.length;
		},
		addShip: function(ship, coordinates, player){
			var ship = battleship.createShip(ship, coordinates);
			console.log(ship);
			var canBePlaced = true;
			for(var coord in ship.coordinates){
				if(this.shipAt(player, ship.coordinates[coord])){
					canBePlaced = false;
				}
			}
			if(canBePlaced){
				ships.push(ship);
			}
			return canBePlaced;
		},
		shipAt: function(player, shipLocation){
			var shipFound = false;
			for(var ship in ships){
				var shipUnderInspection = ships[ship];
				var shipCoords = shipUnderInspection.coordinates;
				for(var coord in shipCoords){
					if((shipCoords[coord].x == shipLocation.x) && (shipCoords[coord].y == shipLocation.y)){
						shipFound = true;
					}
				}
			}
			console.log(shipFound);
			return shipFound;
		}
	}
	return game;	
}


