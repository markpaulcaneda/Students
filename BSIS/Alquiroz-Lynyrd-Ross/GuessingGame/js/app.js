var app = angular.module('tryApp', []);

app.controller('tryController', GuessTheNumberCtrl);

function GuessTheNumberCtrl($scope) {
	$scope.verifyGuess = function() {
		$scope.deviation = $scope.original - $scope.guess;
		$scope.noOfTries++;
	}

	$scope.initializeGame = function() {
		$scope.noOfTries = 0;
		$scope.original = Math.floor((Math.random() * 1000) + 1);
		$scope.guess = null;
		$scope.deviation = null;
	}

	$scope.initializeGame();
}