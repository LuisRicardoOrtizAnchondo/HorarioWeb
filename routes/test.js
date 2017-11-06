const express = require('express');
const passport = require('passport');
const testController = require('../controllers/test');
const router = express.Router();

router.get('/', function(req, res, next){
  res.render('layout_logged', {});
});

router.get('/new', function(req, res, next){
  res.render('layout_logged', {});
});

router.get('/modify', function(req, res, next){
  res.render('layout_logged', {});
});

module.exports = router;
