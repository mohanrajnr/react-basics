const express = require('express');
//const path = require('path');
const mustacheExpress = require('mustache-express');
//const open = require('open');
//let bodyParser = require('body-parser');
const dir = {
  views: {
    default: `${__dirname + '/views/'}`,
    partials: `${__dirname + '/views/partials'}`,
  }
};
const app = express();
const port = 3001;
app.engine('mustache', mustacheExpress(dir.views.partials, '.mustache'));
app.set('view engine', 'mustache');
app.set('views', dir.views.default);
var using = express.static('public');
app.use(using);
app.get('/', (req, res) => {
  console.log('xxxxxxxxx');
  //res.send('Hello World!');
  res.render('index', {
    title: 'React Local'
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
