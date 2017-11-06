const express = require('express');
const passport = require('passport');
const subjectController = require('../controllers/subject');
const router = express.Router();

router.get('/', function(req, res, next){
  //encontrar todas las materias que posee el usuario
  //si no se tienen materias renderizar vista que invita a crear una materia
  res.render('subjects/index', {})
});

router.get('/new', function(req, res, next){
  res.render('subjects/new_subject', {})
});

router.get('/modify', function(req, res, next){
  res.render('subjects/new_subject', {})
});

module.exports = router;
