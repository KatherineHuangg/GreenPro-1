const express = require("express");
const path = require('path');
const app = express();
const port = process.env.PORT || 1688;
const routes = require('./routes/index');
const views = __dirname + "/views/";
const db = require('./src/db')
app.use('/', routes);
// sendFile will go here
app.use(express.static(__dirname + '/public'));
app.get('/test', function (req, res) {
  res.render('Custom/ok');
});
app.get('/product', function (req, res) {
  res.render('Store/product');
});
// app.get("/", (req, res) => {
//   // db.test();
// });
// view engine setup
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views')); //注意path要require一下
app.set('view engine', 'html');

app.listen(port);
console.log('Server started at http://localhost:' + port);

