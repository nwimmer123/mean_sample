var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
mongoose.connect('mongodb://localhost/mean_sample');
app.listen(3000, function() {
  console.log('server started');
});

app.get('/api/entry', function allEntries (req,res) {
  Entry.find(function (err, allEntries) {
    if (err) {
      res.status(500).json({ error: err.message});
    } else {
      res.json(allEntries);
    }
  });
});

app.post('/api/entry', function createEntry (req, res) {
  var newEntry = new Entry(req.body);
  newEntry.save(function (err, savedEntry) {
    if (err) {
      res.status(500).json({ error: err.message});
    } else {
      re.json(savedEntry);
    }
  });
});

app.get('/api/entry/:id', function seeOneEntry (req,res) {

});

app.put('/api/entry/:id', function editEntry (req,res) {

});

app.delete('/api/entry/:id', function deleteEnty (req,res) {

});

app.get('*', function (req,res) {
  res.render('index');
});