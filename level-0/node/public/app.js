'use strict';

var app = angular.module('app', [])
 
app.controller('ctrl', function($scope, socket) {
	$scope.messages = [];
	$scope.message = null;

    $scope.send = function send() {
    	console.log("angular: " + $scope.message);
    	$scope.messages.push($scope.message);
    	socket.emit('send', $scope.message);
    };

    socket.on('back', function(info){
    	$scope.messages.push(info);
    });

});


app.factory('socket', function($rootScope) {
    var socket = io.connect();
    return {
        on: function(eventName, callback) {
            socket.on(eventName, function() {
                var args = arguments;
                $rootScope.$apply(function() {
                    callback.apply(socket, args);
                });
            });
        },
        emit: function(eventName, data, callback) {
            if(typeof data == 'function') {
                callback = data;
                data = {};
            }
            socket.emit(eventName, data, function() {
                var args = arguments;
                $rootScope.$apply(function() {
                    if(callback) {
                        callback.apply(socket, args);
                    }
                });
            });
        }
    };
});