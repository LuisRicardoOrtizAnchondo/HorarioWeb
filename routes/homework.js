const express = require('express');
const homeworkController = require('../controllers.mock/homework');
const login = require('../controllers/login')
const router = express.Router();

router.use(login.auth)

router.get('/', homeworkController.findUserHomeworks);
router.get('/new', homeworkController.newHomework);
router.post('/new', homeworkController.saveHomework);
router.get('/modify', homeworkController.modifyHomework);

module.exports = router;
