angular.module('NoteWrangler').factory('Note', function($resource) {
  return $resource(
    '/notes/:id',
    { id: '@id' },
    {
      update: {
        method: 'PUT' //methods can be created and added to $resoures function
      }
    }
  );
});
