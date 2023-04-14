var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((err, req, res, next) => {
    console.log("error handler", err);
    if (err) {
        if (err.status) {
            res.status(err.status).json({
                success: false,
                error: err.error || err.message
            });
        } else {
            res.status(404).json({
                success: false,
                error: `${err.name}: ${err.error || err.message}`
            });
        }
    }
    return;
})

module.exports = app;
