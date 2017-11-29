const express = require('express');
const testController = require('../controllers/test');
const login = require('../controllers/login')
const router = express.Router();

router.use(login.auth)

router.get('/', testController.findTest);
router.get('/new', testController.newTest);
router.post('/new', testController.saveTest);
router.get('/modify/:id', testController.modifyTestView);
router.post('/modify', testController.modifyTest);

module.exports = router;
