const express = require('express');
const passport = require('passport');
const loginController = require('../controllers/login/login');
const router = express.Router();

router.get('/', loginController.index);

/*
router.get('/register', function(req, res) {
    res.render('register', { });
});
*/
router.post('/subscribe', loginController.subscribe);

router.get('/login', function(req, res) {
    res.render('login/login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', loginController.logout);

module.exports = router;
