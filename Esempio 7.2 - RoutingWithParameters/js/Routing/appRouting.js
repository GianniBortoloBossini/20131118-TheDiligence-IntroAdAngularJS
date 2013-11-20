sampleApp .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/addOrder', {
        templateUrl: 'templates/add_order.html',
        controller: 'AddOrderController'
      }).
      when('/showOrders', {
        templateUrl: 'templates/show_orders.html',
        controller: 'ShowOrdersController'
      }).
      when('/showOrder/:orderId', {
        templateUrl: 'templates/show_order.html',
        controller: 'ShowOrderController'
      }).
      otherwise({
        redirectTo: '/addOrder'
      });
  }]);