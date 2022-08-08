const { Router } = require('express');
const { getAllMessages, sendMessage } = require('./message.controller');

const router = Router();
router.get('/', getAllMessages);
router.post('/', sendMessage);

module.exports = router;