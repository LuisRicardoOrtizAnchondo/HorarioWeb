const express = require('express');
const router = express.Router();
const login = require('../controllers/login')
const subjectController = require('../controllers.mock/subject')

router.get('/', login.auth, subjectController.findSubject);
router.get('/new', login.auth, subjectController.newSubject);
router.post('/new', login.auth, subjectController.saveSubject);
router.get('/modify', login.auth, subjectController.modifySubject);

module.exports = router;
