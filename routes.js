const express = require('express');
const app = express();

// Load Express Configuration
require('./expressConfig')(app, express);

// Root route
app.get('/', (req, res) => {
    res.sendfile('index.html', {root: app.settings.views});
});

// Load routes
require('./routes/user')(app) //user routes
require('./routes/note')(app) //note routes
require('./routes/category')(app) //category routes
module.exports = app;