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

app.get('/api/journalEntry', function allEntries (req,res) {

});

app.post('/api/journalEntry', function createEntry (req, res) {

});

app.get('/api/journalEntry/:id', function seeOneEntry (req,res) {

});

app.put('/api/journalEntry/:id', function editEntry (req,res) {

});

app.delete('/api/journalEntry/:id', function deleteEnty (req,res) {

});

app.get('*', function (req,res) {
  res.render('index');
});