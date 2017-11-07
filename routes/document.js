const express = require('express');
const documentController = require('../controllers/document');
const router = express.Router();

router.get('/', documentController.show);

router.post('/newDocument', documentController.newDocument);

router.post('/formDocument', function(req, res){
	res.render('components/formDocument');
});
// router.get('/chat', function(req, res){
// 	res.render('login/chat');
// });

module.exports = router;
