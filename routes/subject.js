const express = require('express');
const passport = require('passport');
const subjectController = require('../controllers/subject');
const router = express.Router();

router.get('/', function(req, res, next){
  //encontrar todas las materias que posee el usuario
  //si no se tienen materias renderizar vista que invita a crear una materia
  res.render('subjects/index', subjectController.findUserSubjects);
});

router.get('/new', function(req, res, next){
  res.render('subjects/new', subjectController.newSubject);
  //se necesita agregar un post para registrar nuevas materias
});

router.get('/modify', function(req, res, next){
  res.render('subjects/new', {});
  //se cambiará esta ruta a /modify/[:id] y se rellenarán los campos del
  //form de la materia con los que ya se tienen registrados
});

module.exports = router;
