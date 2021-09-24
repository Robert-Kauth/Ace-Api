// Module Imports
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { sequelize } = require('./db/models');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Local imports
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const apiToolboxRouter = require('./routes/api_toolboxes');
const reviewRouter = require('./routes/review')
const implementationRouter = require('./routes/implementations');
const toolboxesRouter = require('./routes/toolboxes');
const searchRouter = require('./routes/search')
const { sessionSecret } = require('./config');
const { restoreUser } = require('./auth.js');

const app = express();

// view engine setup
app.set('view engine', 'pug');

//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(sessionSecret));
app.use(express.static(path.join(__dirname, 'public')));

// set up session middleware
const store = new SequelizeStore({ db: sequelize });

app.use(
	session({
		secret: sessionSecret,
		store,
		saveUninitialized: false,
		resave: false,
	})
);

// create Session table if it doesn't already exist
store.sync();

app.use(restoreUser);
// Routers
app.use('/', indexRouter);
app.use('/apis', apiRouter);
app.use('/apis/toolboxes', apiToolboxRouter);
app.use('/reviews', reviewRouter);
app.use('/implementations', implementationRouter);
app.use('/toolboxes', toolboxesRouter);
app.use('/search', searchRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
	// next()
});

// error handler
app.use(function (err, req, res, next) {

	// console.log("INSIDE **error handler** ")

	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);

	// res.render('404', {title: "Ace API - Page Not Found"});
	res.render("error")

});

module.exports = app;
