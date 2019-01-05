var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var formsRouter = require('./routes/forms');

var app = express();

var mongoose = require('mongoose');

// var dbConnection = app.get('env') === 'development'
// 	? 'mongodb://localhost:27017/freeforms'
// 	: 'mongodb://lindennerd:mydb1234@ds115283.mlab.com:15283/freeforms';

var dbConnection = 'mongodb://lindennerd:mydb1234@ds115283.mlab.com:15283/freeforms';

mongoose.connect(dbConnection);

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.on('open', function() {
  console.log('db connected on ' + dbConnection);
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist/')))
app.use('/popper', express.static(path.join(__dirname, 'node_modules/popper/dist/')))
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/')))
app.use('/watchjs', express.static(path.join(__dirname, 'node_modules/melanke-watchjs/src/')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/forms', formsRouter);

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
