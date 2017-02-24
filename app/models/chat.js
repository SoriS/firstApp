


var mongoose = require('mongoose');

var userShema = require('./user')
var messageSchema = require('./message')

var ObjectId = mongoose.Schema.ObjectId;

var chatSchema = mongoose.Schema({
    users: [userShema],
    messages: [messageSchema]
})


module.exports = mongoose.model('Chat', chatSchema)