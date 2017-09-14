angular.module('NoteWrangler')
.directive('nwCard', ['$sce', function($sce) {
  return {
    replace: true,
    restrict: "E",
    scope: {
      header: "=",
      body: "=",
      image: "=",
      icon: "@",
      id: "=",
      type: "@"
    },
    templateUrl: "templates/directives/nw-card.html",
    link: function(scope, element) {
      if(scope.body){
        scope.body = $sce.trustAsHtml(markdown.toHTML(scope.body.toString()));
      }
    }
  };
}]);



