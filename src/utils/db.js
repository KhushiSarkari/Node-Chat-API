const mongoose = require('mongoose');
const { config } = require('../config/dev');

exports.connect = (url = config.dbUrl, options = {}) => {
    mongoose.connect(url, { ...options, useUnifiedTopology: true, useNewUrlParser: true });
    mongoose.connection.once('open', _ => {
        console.log('Connection established');
    }).on('error', (err) => {
        console.log('Connection error');
        throw err;
    });
};