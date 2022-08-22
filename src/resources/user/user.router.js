const { Router } = require('express');
const { getAllUsers, createUser } = require('./user.controller');

const router = Router();
router.get('/', getAllUsers);
router.post('/', createUser);

module.exports = router;