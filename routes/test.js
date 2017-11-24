const express = require('express');
const testController = require('../controllers.mock/test');
const login = require('../controllers/login')
const router = express.Router();

router.get('/', login.auth, testController.findTest);
router.get('/new', login.auth, testController.newTest);
router.get('/modify', login.auth, testController.modifyTest);

module.exports = router;