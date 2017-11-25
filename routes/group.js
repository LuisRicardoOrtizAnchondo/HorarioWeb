const express = require('express');
const passport = require('passport');
const groupController = require('../controllers/group');
const router = express.Router();
const login = require('../controllers/login')

router.use(login.auth)
router.get('/', function(req, res, next){
  res.render('layout_logged', {});
});

router.get('/new', function(req, res, next){
  res.render('layout_logged', {});
});

router.get('/unite', function(req, res, next){
  res.render('layout_logged', {});
});

module.exports = router;
