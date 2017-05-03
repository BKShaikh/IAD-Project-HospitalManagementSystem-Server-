var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var jwt    = require('jsonwebtoken');

var index = require('./routes/index');
var users = require('./routes/users');
var doctors = require('./routes/doctor');
var patients = require('./routes/patient');
var wards = require('./routes/ward');
var rooms = require('./routes/room');
var emergencies = require('./routes/emergency');
var labs = require('./routes/lab');
var opds = require('./routes/opd');
var medicalhistories = require('./routes/medicalhistory');
var diseases = require('./routes/disease');
var staffe = require('./routes/staff');
var accounts = require('./routes/account')



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('superSecret', Supersecret="iloveIAD");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/doctors', doctors);
app.use('/patients', patients);
app.use('/wards', wards);
app.use('/rooms', rooms);
app.use('/emergencies',emergencies);
app.use('/labs',labs);
app.use('/opds',opds);
app.use('/medicalhistories',medicalhistories);
app.use('/diseases',diseases);
app.use('/staffe',staffe);
app.use('/accounts',accounts);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
