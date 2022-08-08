const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
    from: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: true
    },
    to: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: true
    },
}, {
    timestamps: true
});

const Conversation = mongoose.model('conversation', conversationSchema);

module.exports = Conversation;