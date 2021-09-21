const db = require('./db/models');

const loginUser = (req, res, user) => {
	req.session.auth = {
		userId: user.id,
	};
};

const logoutUser = (req, res, user) => {
	delete req.session.auth;
};

const restoreUser = async (req, res, next) => {
	if (req.session.auth) {
		const { userId } = req.session.auth;

		try {
			const user = await db.User.findByPk(userId);
			if (user) {
				res.locals.authenticated = true;
				res.locals.user = user;
				next();
			}
		} catch (error) {
			res.locals.authenticated = false;
			next(error);
		}
	} else {
		res.locals.authenticated = false;
		next();
	}
};

const requireAuth = (req, res, next) => {
	if (!res.locals.authenticated) {
		return res.redirect('/login');
	}
	return next();
};

const authorize = (req, res, next) => {
	if (req.session.user) {
		next();
	} else {
		res.redirect('/login');
	}
};

module.exports = {
	loginUser,
	logoutUser,
	restoreUser,
	authorize,
	requireAuth,
};
