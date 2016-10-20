var app = angular.module('myApps', []);
app.controller('GuessNumCtrl', GuessNumCtrl);

function GuessNumCtrl($scope){

	$scope.verifyGuess = function(){

		$scope.deviation = $scope.original - $scope.guess;
		$scope.noOfTries = $scope.noOfTries + 1;
	}

	$scope.initializeGame = function (){

		$scope.noOfTries = 0;
		$scope.original = Math.floor((Math.random() * 5)+1);
		$scope.guess = null;
		$scope.deviation = null;
	}

	$scope.initializeGame();

}