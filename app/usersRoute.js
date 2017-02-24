

var mongoose = require('mongoose');
var userDbSet = require('./models/user');

var messageDbSet = require('./models/message');
var chatDbSet = require('./models/chat');

module.exports = function (app) {



    app.get('/chats', isLoggedIn, function (req, res) {

        userDbSet.find({ qty: { $ne: 20 } }, function (error, users) {
            if (error)
                users = [];
            res.render('chats.ejs', {
                users: users
            })
        });
    })

    app.post('/newChat', isLoggedIn, function (req, res) {

        console.log(req);

        res.render('chats.ejs', {
            users: users
        })

    });

    app.get('/myChats', isLoggedIn, function (req, res) {

        var currentUser = req.user;

        console.log(currentUser.chats);

    });


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
