const Conversation = require('./conversation.model');

module.exports.getAllConversations = (req, res) => {
    Conversation.find({}, (err, messages) => {
        if (err)
            res.status(400).send({ message: 'Not Found' })
        res.status(200).send(messages);
    });
}
