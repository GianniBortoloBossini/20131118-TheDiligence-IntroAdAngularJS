'use strict';

eventsApp.factory('friendlySessionServices', function () {
    return {
        getLevel : function(event, sessionId){
            for (var k = 0; k < event.sessions.length; ++k) { 
                if(event.sessions[k].id == sessionId) {
                    if(event.sessions[k].level == 100)
                        return 'Beginner';
                    else if (event.sessions[k].level == 200)
                        return 'Intermediate';
                    else if (event.sessions[k].level == 300)
                        return 'Advanced';
                    else
                        return 'Unclassified';
                }
            }
        },    
        getColor : function(event, sessionId){
            for (var k = 0; k < event.sessions.length; ++k) { 
                if(event.sessions[k].id == sessionId) {
                    if(event.sessions[k].level == 100)
                        return {color:'green'};
                    else if (event.sessions[k].level == 200)
                        return {color:'yellow'};
                    else if (event.sessions[k].level == 300)
                        return {color:'red'};
                    else
                        return {color:'black'};
                }
            }
        }
    };
});