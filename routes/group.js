const express = require('express');
const passport = require('passport');
const groupController = require('../controllers/group');
const router = express.Router();

router.get('/', function(req, res, next){
  res.send("hola")
});

router.get('/new', function(req, res, next){
  res.send("hola")
});

router.get('/unite', function(req, res, next){
  res.send("hola")
});

module.exports = router;
