const express = require('express');
const passport = require('passport');
const homeworkController = require('../controllers/homework');
const router = express.Router();

router.get('/', function(req, res, next){
  res.send("hola")
});

router.get('/new', function(req, res, next){
  res.send("hola")
});

router.get('/modify', function(req, res, next){
  res.send("hola")
});

module.exports = router;
