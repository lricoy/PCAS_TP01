var express = require('express');
var app = express();

app.set('port', process.env.PORT || 80);
app.use(express.static(__dirname + '/dist'));

app.listen(app.get('port'), function() {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

module.exports = app;