angAdvisorApp.controller('AddCommentCtrl', 
                         function($scope, $location, $http) {
    
    $scope.reviewer = {
        date : '',
        name : '',
        comment : ''
    };
    
    $scope.saveComment = function()  {
        var args = $location.path().split('/');
        console.log(args[2]);
        
        $scope.reviewer.date = Date.now();
        
        $http({
            method: 'PUT', 
            url: 'http://localhost:3000/restaurants/' + args[2] + '/addcomment',
            data: $scope.reviewer
        }).success(function(data) {
            console.log("ADD COMMENT success");
            $location.url('restaurants/' + args[2]); 
        }).error(function(data, status) {
            console.log("ADD COMMENT error: " + data + " - " + status);
        });
    };
});