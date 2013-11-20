angAdvisorApp.controller('RestaurantsCtrl', 
                         function($scope, $http, $location) {
    $scope.restaurants = [];
    
    $scope.$on('$viewContentLoaded', function() {
        $http(
        {
            method: 'GET', 
            url: 'http://localhost:3000/restaurants'
        }).success(function(data)
        {
            console.log(data[0]);
            $scope.restaurants = data;
        });
    });
    
    $scope.openRestaurant = function(id) {
        $location.url('restaurants/' + id); 
    }
});