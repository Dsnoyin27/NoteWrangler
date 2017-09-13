angular
.module('NoteWrangler')
.controller('UsersIndexController', function(User, $scope) {
  $scope.user = User.query();
  $scope.search = {};

  

  
});
