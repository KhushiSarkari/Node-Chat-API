const { Router } = require('express');
const { getAllUsers } = require('./user.controller');

const router = Router();
router.get('/', getAllUsers);

module.exports = router;