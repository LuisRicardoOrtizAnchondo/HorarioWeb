const express = require('express');
const router = express.Router();
const login = require('../controllers/login')
const subjectController = require('../controllers/subject')

router.use(login.auth)

router.get('/', subjectController.findSubject);
router.get('/new', subjectController.newSubject);
router.post('/new', subjectController.saveSubject);
router.get('/modify/:id', subjectController.modifySubjectView);
router.post('/modify/:id', subjectController.modifySubject);

module.exports = router;
