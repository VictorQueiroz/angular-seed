'use strict';

angular.module('myApp.user.user-profile', ['myApp.user.user-profile-controller'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/user/profile', {
    templateUrl: 'user-profile/user-profile.html',
    controller: 'UserProfileCtrl'
  });
}]);