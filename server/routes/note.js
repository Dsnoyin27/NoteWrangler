const _ = require('lodash');
const Note = require('../models/note');

module.exports = function(app) {
  app.get('/note', function(req, res) {
    res.json(Note.all());
  });

  app.post('/notes', function(req, res) {
      setTimeout(function(){
          res.json(Note.create(req.body));
      }, 1000);
  });
  app.put('/notes/:id', function(req, res) {
    setTimeout(function(){
        res.json(Note.create(req.body));
    }, 1000);
});
app.get('/notes/:id', function(req, res) {
    let noteId = parseInt('id', 10);
    res.json(Note.get(noteId) || {});
});

app.delete('/notes/:id', function(req, res) {
    res.json(Note.delete(parseInt (req.param('id', 10)) || {}));
});

};
