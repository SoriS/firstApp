// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

<<<<<<< HEAD


=======
>>>>>>> e2237332c9320897053e684bd64257fa66364e11
// define the schema for our user model
var userSchema = mongoose.Schema({

    local: {
        email: String,
        password: String,
    },
<<<<<<< HEAD
    messages: [{ ref: 'Message', type: mongoose.Schema.Types.ObjectId }],
    chats: [{ ref: 'Chat', type: mongoose.Schema.Types.ObjectId }],
=======
>>>>>>> e2237332c9320897053e684bd64257fa66364e11
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    twitter: {
        id: String,
        token: String,
        displayName: String,
        username: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    }

});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
