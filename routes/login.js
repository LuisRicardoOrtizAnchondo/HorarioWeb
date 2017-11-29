const express = require('express');
const passport = require('passport');
const loginController = require('../controllers/login');
const router = express.Router();

router.get('/', loginController.index);

router.post('/subscribe', loginController.subscribe);

router.post('/login', passport.authenticate('local', { failureRedirect: '/error' }), function(req, res) {
    res.redirect('/');
});

router.get('/error', loginController.error);

router.get('/logout', loginController.logout);

router.get('/auth/facebook',
    passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });
module.exports = router;
