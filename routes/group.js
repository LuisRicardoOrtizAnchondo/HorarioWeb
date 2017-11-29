const express = require('express');
const groupController = require('../controllers/group');
const router = express.Router();
const login = require('../controllers/login')

router.use(login.auth)

router.get('/', groupController.findUserGroups);
router.get('/new', groupController.newGroup);
router.post('/new', groupController.saveGroup);
router.get('/modify/:id', groupController.modifyGrupoView);
router.post('/modify', groupController.modifyGroup);

module.exports = router;
