angular
  .module('NoteWrangler')
  .controller('UsersShowController', function(User, $scope) {
    $scope.users = User.query();
  });
