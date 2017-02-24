
var mongoose = require('mongoose');



var messageSchema = mongoose.Schema({

    chat: {
        ref: 'Chat',
        type: mongoose.Schema.Types.ObjectId
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    message: {
        text: String,
        date: {
            type: Date,
            default: Date.now
        }
    }
})

module.exports = mongoose.model('Message', messageSchema);