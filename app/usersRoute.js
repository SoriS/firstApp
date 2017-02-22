

var mongoose = require('mongoose');
var userDbSet = require('./models/user');

module.exports = function (app) {


    app.get('/users', isLoggedIn, function (req, res) {

        userDbSet.find({}, function (error, users) {
            if (error) {
                users = [];
            }
            res.render('users.ejs', {
                users: users
            })
        })
    });

}


// route middleware to make sure
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
