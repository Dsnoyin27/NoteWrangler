angular
  .module('NoteWrangler')
  .controller('NotesEditController', function(
    $scope,
    Note,
    Category,
    User,
    $routeParams,
    $location
  ) {
    $scope.note = Note.get({ id: $routeParams.id });
    $scope.isSubmitting = false;
    $scope.categories = Category.query();
    $scope.users = User.query();

    //saveNote method called on ng-click in edit html is created here
    // calls update method created in note services on saveNote
    $scope.saveNote = function(note) {
      $scope.isSubmitting = true;
      note.$update();

      note.$update().finally(function() {
        $scope.isSubmitting = false;
        $location.path('/notes/' + note.id);
      });
    };
  });
