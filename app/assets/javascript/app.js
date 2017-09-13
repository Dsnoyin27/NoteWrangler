// Declare app level module which depends on ngRoute
angular
  .module('NoteWrangler', ['ngRoute', 'ngResource', 'ngGravatar'])
  .config(function(GravatarProvider) {
    GravatarProvider.setSize(100);
  });
