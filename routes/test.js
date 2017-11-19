const express = require('express');
const passport = require('passport');
const testController = require('../controllers/test');
const router = express.Router();

router.get('/', function(req, res, next){
  let tests = [
    {
      topics: "String",
      due: "Date",
      subject: ""
    }
  ];
  res.render('test/index', {tests: tests});
});

router.get('/new', function(req, res, next){
  let subjects = [
    {name: "Fisica"},
    {name: "Quimica"}
  ];
  res.render('test/new', {subjects: subjects});
});

router.get('/modify', function(req, res, next){
  res.render('layout_logged', {});
});

module.exports = router;
