angular.module('NoteWrangler').filter('CategoryFilter', function() {
  return function(collection, category) {
    let newCollection = [];
    if (category && category.id) {
      for (let i = 0, l = collection.length; i < l; i++) {
        if (collection[i].categoryId == category.id) {
          newCollection.push(collection[i]);
        }
      }
      return newCollection;
    } else {
      return collection;
    }
  }
});
