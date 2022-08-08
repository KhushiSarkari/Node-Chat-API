const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
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
    conversationId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'conversation',
        required: true
    },
    message: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'delivered', 'sent'],
        default: 'pending',
    }
}, {
    timestamps: true
});

const Message = mongoose.model('messages', messageSchema);

module.exports = Message;