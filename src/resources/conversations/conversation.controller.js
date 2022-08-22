const User = require('../user/user.model');
const Conversation = require('./conversation.model');

module.exports.getAllConversations = (req, res) => {
    Conversation.find({}, (err, messages) => {
        if (err)
            res.status(400).send({ message: 'Not Found' })
        res.status(200).send(messages);
    });
}

module.exports.createConversations = async (req, res) => {
    let [from, to] = await Promise.all([User.findOne({ email: req.body.from }), User.findOne({ email: req.body.to })])
    let conversation = new Conversation({
        from: from._id,
        to: to._id
    });
    // const docs = await Conversation.findOne({ from: from._id, to: to._id });
    const docs = await Conversation.findOne({ $or: [{ from: from._id, to: to._id }, { to: from._id, from: to._id }] })
    if (docs) {
        res.status(201).send(docs);
    } else {
        conversation.save((err, data) => {
            if (err) {
                res.status(500).send({ message: 'Internal Server Error' });
            }
            res.status(201).send(data);
        })
    }
}
