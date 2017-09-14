angular.module('NoteWrangler').controller('UsersShowController', function($scope, $routeParams, User, $gravatar) {
  
  
  $scope.user = User.get({id: $routeParams.id});
  
  $scope.gravatarUrl = function(user) {
    return $gravatar.generate(user.email);
  }
});
