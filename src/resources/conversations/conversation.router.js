const { Router } = require('express');
const { getAllConversations, createConversations } = require('./conversation.controller');

const router = Router();
router.get('/', getAllConversations);
router.post('/', createConversations);

module.exports = router;