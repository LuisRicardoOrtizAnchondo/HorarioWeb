const express = require('express');
const passport = require('passport');
const loginController = require('../controllers/login/login');
const router = express.Router();

router.get('/', loginController.index);

router.get('/subscribe', loginController.subscribe);

router.post('/subscribe', loginController.subscribe);

router.get('/login', loginController.login);

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

//router.post('/uploadAvatar', loginController.uploadAvatar);

router.get('/logout', loginController.logout);

router.get('/chat', function(req, res){
	res.render('login/chat');
});

module.exports = router;
