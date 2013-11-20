angAdvisorApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }).
      when('/restaurants', {
        templateUrl: 'templates/show_restaurants.html',
        controller: 'RestaurantsCtrl'
      }).
      when('/restaurants/:id', {
        templateUrl: 'templates/show_restaurant.html',
        controller: 'RestaurantCtrl'
      }).
      when('/restaurants/:id/addcomment', {
        templateUrl: 'templates/add_comment.html',
        controller: 'AddCommentCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);