ratingStarsApp.controller('ratingStarsController', function($scope, $window) {
    $scope.rating = 5;
    $scope.saveRatingToServer = function(rating) {
      $window.alert('Rating selected - ' + rating);
    };
	$scope.upVote = function() {
		$scope.rating++;
	};
	$scope.downVote = function() {
		$scope.rating--;
	};
	$scope.disableUpVoting = function() {
		return $scope.rating > 9;
	};
	$scope.disableDownVoting = function() {
		return $scope.rating < 2;
	};
  })