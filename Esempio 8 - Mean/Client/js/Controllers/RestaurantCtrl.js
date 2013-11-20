angAdvisorApp.controller('RestaurantCtrl', 
                         function($scope, $location, $http) {

    $scope.manageRestaurant ={
        name:'',
        address:'',
        postalCode:'',
        city:'',
        province:'',
        state:'',
        comments:[]
    };

    $scope.isNew = true;

    // ON LOAD
    $scope.$on('$viewContentLoaded', function() {
        var args = $location.path().split('/');
        console.log(args[2]);
        
        if(args[2] == 'new') {
            console.log("isNew = true");
            $scope.isNew = true;
        }
        else {
            console.log("isNew = false");
            
            $scope.isNew = false;
            
            $http({
                method: 'GET', 
                url: 'http://localhost:3000/restaurants/' + args[2]
            }).success(function(data) {
                console.log("data: " + data);
                $scope.manageRestaurant = data;
            });
        }
    });

    // REST
                             
    // Insert new restaurant
    $scope.insertRestaurant = function() {
        console.log("post _id: " + $scope.manageRestaurant._id);
        
        $http({
            method: 'POST', 
            url: 'http://localhost:3000/restaurants',
            data: $scope.manageRestaurant
        }).success(function(data) {
            $location.url('restaurants'); 
        }).error(function(data, status) {
            console.log("POST error: " + data + " - " + status);
        });
    };

    // Update existing restaurant
    $scope.saveRestaurant = function() {
        console.log("save _id: " + $scope.manageRestaurant._id);
    
        $http({
            method: 'PUT', 
            url: 'http://localhost:3000/restaurants/' + $scope.manageRestaurant._id,
            data: $scope.manageRestaurant
        }).success(function(data) {
            console.log("PUT success");
            $location.url('restaurants'); 
        }).error(function(data, status){
            console.log("PUT error: " + data + " - " + status);
        });
    };

    // Delete existing restaurant
    $scope.deleteRestaurant = function() {
        console.log("delete _id: " + $scope.manageRestaurant._id);
    
        $http({
            method: 'DELETE', 
            url: 'http://localhost:3000/restaurants/' + $scope.manageRestaurant._id
        }).success(function(data) {
            console.log("DELETE success");
            $location.url('restaurants'); 
        }).error(function(data, status) {
            console.log("DELETE error: " + data + " - " + status);
        });
    };

    // Go to comment
    $scope.addCommentToRestaurant = function() {
        console.log("add comment _id: " + $scope.manageRestaurant._id);
        
        $location.url('restaurants/' + $scope.manageRestaurant._id + '/addcomment'); 
    };
});