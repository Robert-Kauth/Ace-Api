
const db = require('./db');


function loginUser(req, res, user) {
    req.session.auth = {
        userId: user.id
    }
}

function logoutUser(req, res, user) {
    delete req.session.auth
}

async function restoreUser(req, res, next) {
    if(req.session.auth){
        const { userId } = req.session.auth

        try {
            const user = await db.User.findByPk(userId)
            if(user){
                res.locals.authenticated = true
                res.locals.user = user
                next()
            }
        } catch (error) {
            res.locals.authenticated = false;
            next(error);
        }
    } else {
        res.locals.authenticated = false;
        next();
    }
}

function requireAuth(req, res, next) {
    if (!res.locals.authenticated) {
        return res.redirect('/login');
    } else return next()
}

module.exports = {
    loginUser,
    logoutUser,
    restoreUser,
    requireAuth
}
