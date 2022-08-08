const User = require('./user.model');

module.exports.getAllUsers = (req, res) => {
    User.find({}, (err, messages) => {
        if (err)
            res.status(400).send({ message: 'Not Found' })
        res.status(200).send(messages);
    });
}

module.exports.createUser = (req,res) => {
    let user = new User(req.body);
    user.save((err) => {
        if (err) {
            res.status(500).send({ message: 'Internal Server Error' });
        }
        res.status(201).send({ message: 'Created' });
    })
}
