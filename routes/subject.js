const express = require('express');
const router = express.Router();
const login = require('../controllers/login')
const subjectController = require('../controllers.mock/subject')

router.use(login.auth)

router.get('/', subjectController.findSubject);
router.get('/new', subjectController.newSubject);
router.post('/new', subjectController.saveSubject);
router.get('/modify', subjectController.modifySubject);

module.exports = router;
