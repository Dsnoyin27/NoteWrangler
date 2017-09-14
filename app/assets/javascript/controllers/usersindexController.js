angular
  .module('NoteWrangler')
  .controller('UsersIndexController', function($scope, User) {
    $scope.users = User.query();

    
  });
