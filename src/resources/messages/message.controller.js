const { default: mongoose } = require('mongoose');
const Conversation = require('../conversations/conversation.model');
const Message = require('./message.model');

module.exports.getAllMessages = (req, res) => {
    Message.find({ conversationId: mongoose.Types.ObjectId(req.query.id) }, (err, messages) => {
        if (err)
            res.status(400).send({ message: 'Not Found' })
        res.status(200).send(messages);
    });
}

module.exports.sendMessage = async (req, res) => {
    const { conversationId, message, from, to } = req.body;
    const conversation = await Conversation.findById(conversationId);
    if (conversation) {
        const data = {
            conversationId: mongoose.Types.ObjectId(conversationId),
            message,
            from,
            to
        }
        let newMessage = new Message(data);
        newMessage.save((err) => {
            if (err) {
                res.status(500).send({ message: 'Internal Server Error' });
            }
            res.status(201).send({ message: 'Created' });
        });

    } else {
        res.status(400).send({ message: "Conversation doesn't exist" });
    }
}