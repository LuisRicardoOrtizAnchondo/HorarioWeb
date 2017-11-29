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

module.exports = router;
