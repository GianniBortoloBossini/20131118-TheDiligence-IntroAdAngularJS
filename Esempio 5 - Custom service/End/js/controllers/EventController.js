'use strict';

eventsApp.controller('EventController',
    function EventController($scope, 
                             eventDataService, 
                             friendlySessionServices) {
        $scope.event = eventDataService.event;

        $scope.getFriendlyLevel = function(sessionId) {
            return friendlySessionServices.getLevel(eventDataService.event, 
                                                           sessionId);
        };
        
        $scope.getFriendlyColor = function(sessionId) {
            console.log(sessionId);
            return friendlySessionServices.getColor(eventDataService.event, 
                                                           sessionId);
        };
        
        $scope.UpVoteSession = function (eventsession) {
            eventsession.upVoteCount++;
        };

        $scope.DownVoteSession = function (eventsession) {
            eventsession.upVoteCount--;
        };

        $scope.downVoteButtonDisabled = function (eventsession) {
            return eventsession.upVoteCount == 0;
        }

        $scope.sortorder = 'name';
    }
);