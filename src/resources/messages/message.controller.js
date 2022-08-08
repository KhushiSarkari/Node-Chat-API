const Message = require('./message.model');

module.exports.getAllMessages = (req, res) => {
    Message.find({}, (err, messages) => {
        if (err)
            res.status(400).send({ message: 'Not Found' })
        res.status(200).send(messages);
    });
}

module.exports.sendMessage = (req, res) => {
    let message = new Message(req.body);
    message.save((err) => {
        if (err) {
            res.status(500).send({ message: 'Internal Server Error' });
        }
        res.status(201).send({ message: 'Created' });
    })
}