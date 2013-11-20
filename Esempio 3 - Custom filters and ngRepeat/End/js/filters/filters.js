'use strict'

var sportIllustratedApp = angular.module('sportIllustratedApp', [])
.filter('startWith', function() {
    return function(players, startWiths) {
        if(players == null || startWiths == null)
            return players;
        
        var removableIndices = [];
        
        for(var i = 0; i < players.length; i++) {
            
            if(startWiths['name'] != null && startWiths['name'] != '') {
                if(players[i].name.substr(0, startWiths['name'].length).toLowerCase() != startWiths['name'].toLowerCase()){
                    if(removableIndices.indexOf(i) == -1) {
                        removableIndices.push(i);
                    }
                }
            }
            
            if(startWiths['surname'] != null && startWiths['surname'] != '') {
                if(players[i].surname.substr(0, startWiths['surname'].length).toLowerCase() != startWiths['surname'].toLowerCase()){
                    if(removableIndices.indexOf(i) == -1) {
                        removableIndices.push(i);
                    }
                }
            }
            
            if(startWiths['age'] != null && startWiths['age'] != '') {
                if(players[i].age.toString().substr(0, startWiths['age'].length).toLowerCase() != startWiths['age'].toLowerCase()){
                    if(removableIndices.indexOf(i) == -1) {
                        removableIndices.push(i);
                    }
                }
            }
            
            if(startWiths['gender'] != null && startWiths['gender'] != '') {
                if(players[i].gender.substr(0, startWiths['gender'].length).toLowerCase() != startWiths['gender'].toLowerCase()){
                    if(removableIndices.indexOf(i) == -1) {
                        removableIndices.push(i);
                    }
                }
            }
        }
        
        for(var i=0; i<removableIndices.length; i++) {
            players.splice(removableIndices[i] - i, 1);
        }
        
        return players;
    }
})