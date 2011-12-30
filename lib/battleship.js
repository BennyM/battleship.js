module.exports.createGame = function (){
	var players = [];
	var ships = [];
	var createShip = function(name, placeOnBoard){
		if(name === "cruiser"){
			return {
				name: "Cruiser",
				length: 3,
				coordinates : createCoordinates(placeOnBoard, 3)
			};
		}
	};
	var xPositions = ["A", "B", "C", "D", "E", "F", "G","H", "I", "J"];
	var yPositions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
	var createCoordinates = function(placeOnBoard, length){
		var coordinates = [];
		if(placeOnBoard.orientation == "vertical"){
			var shipYPositions = yPositions.slice(yPositions.indexOf(placeOnBoard.y), length);
			for(var yPosition in shipYPositions){
				coordinates.push({x: placeOnBoard.x, y: shipYPositions[yPosition]});
			}
			return coordinates;
		}else{
			var shipXPositions = xPositions.slice(xPositions.indexOf(placeOnBoard.x), length);
			for(var xPosition in shipXPositions){
				coordinates.push({x: shipXPositions[xPosition], y: placeOnBard.y});
			}
			return coordinates;
		}

		
	};
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
			ships.push(createShip(ship, coordinates));
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


