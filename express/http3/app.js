var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//removi a importação de index
var usersRouter = require('./routes/users'); //importação do arquivo de rotas de usuários
var productsRouter = require('./routes/products'); //importação do arquivo de rotas de produtos

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//removi a rota de index, removi também o arquivo /routes/index.js
//removi a view de index (index.ejs)
app.use('/users', usersRouter); //declarando a rota de usuários
app.use('/products', productsRouter); //declarando a rota de usuários

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
