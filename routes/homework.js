const express = require('express');
const passport = require('passport');
const homeworkController = require('../controllers/homework');
const router = express.Router();

router.get('/', function(req, res, next){
  res.render('layout_logged', {});
});

router.get('/new', function(req, res, next){
  var subjects = [
    {name: "Fisica"},
    {name: "Quimica"}
  ];
  res.render('homework/new', {subjects: subjects});
});

router.get('/modify', function(req, res, next){
  res.render('layout_logged', {});
});

module.exports = router;
