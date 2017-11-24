const express = require('express');
const homeworkController = require('../controllers.mock/homework');
const login = require('../controllers/login')
const router = express.Router();

router.get('/', login.auth, homeworkController.findUserHomeworks);

router.get('/new', login.auth, homeworkController.newHomework);

router.get('/modify', login.auth, homeworkController.modifyHomework);

module.exports = router;
