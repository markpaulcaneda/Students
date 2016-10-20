var app = angular.module('GuessTheNumber', []);
app.controller('GuessTheNumberCtrl', GuessTheNumberCtrl);

function GuessTheNumberCtrl($scope){
	$scope.verifyGuess = function () {
		$scope.deviation = $scope.original - $scope.guess;
		$scope.noOfTries = $scope.noOfTries + 1;
	}

	$scope.initializeGame = function() {
		$scope.noOfTries = 0;
		$scope.original = Math.floor((Math.random ()*1000) + 1);
		$scope.guess = null;
		$scope.deviation = null;
	}
	$scope.initializeGame();
}
var matchingGame = {};
matchingGame.deck = [
	'cardAK', 'cardAK',
	'cardAQ', 'cardAQ', 
	'cardAJ', 'cardAJ',
	'cardBK', 'cardBK',
	'cardBQ', 'cardBQ',
	'cardBJ', 'cardBJ'
]
var score = 0;
var cardCounter = 12;

$(function(){

	matchingGame.deck.sort(shuffle);
	for(var i = 0; i < 11; i++) {
		$(".card:first-child").clone().appendTo("#cards");
	}
	$("#cards").children().each(function(index) {        	
		$(this).css({
			"left" : ($(this).width() + 20) * (index % 4),
			"top"  : ($(this).height() + 20) * Math.floor(index / 4)
		});
		var pattern = matchingGame.deck.pop();
		$(this).find(".back").addClass(pattern);
		$(this).attr("data-pattern", pattern);
		$(this).click(selectCard);
    });
	
});
function shuffle() {
	return 0.5 - Math.random();
}
function selectCard() {
	if($(".card-flipped").size() > 1) {
		return;
	}
	$(this).addClass("card-flipped");
	if($(".card-flipped").size() == 2) {
		setTimeout(checkPattern, 700);
	}
	//$("#select_size").html($(".card-flipped").size());
}
function checkPattern() {
	if(isMatchPattern()) {
		$(".card-flipped").removeClass("card-flipped").addClass("card-removed");
			//$(".card-removed").bind("webkitTransitionEnd", removeTookCards);
			removeTookCards();
			score += 15;
			$("#score").html(score);
			cardCounter += -2;
			if(cardCounter == 0) {
				if(score > 10)
					$("#msg").html("Conguatulation!");
				else
					$("#msg").html("Make persistent efforts.");
			}
	}
	else {
		$(".card-flipped").removeClass("card-flipped");
		score += -10;
		$("#score").html(score);
	}
}
function removeTookCards() {
	$(".card-removed").remove();
}
function isMatchPattern() {
	var cards = $(".card-flipped");
	var pattern1 = $(cards[0]).data("pattern");
	var pattern2 = $(cards[1]).data("pattern");
	return (pattern1 == pattern2);
}