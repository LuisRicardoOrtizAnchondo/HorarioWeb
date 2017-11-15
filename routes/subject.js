const express = require('express');
const passport = require('passport');
const subjectController = require('../controllers/subject');
const router = express.Router();

router.get('/', function(req, res, next){
  //encontrar todas las materias que posee el usuario
  //si no se tienen materias renderizar vista que invita a crear una materia
  // la siguiente variable ejemplifica como son los objetos de cada materia
  // (falta owner id y grupos, si hay)
  var subjects = [
    {name: "Fisica", teacher: "Javier Mendoza", horario:{mon: "10 am - 11 am", wed: "10 am - 11 am"}, classroom: "E-23"},
    {name: "Quimica", teacher: "Martha Arreola", horario:{tue: "10 am - 11 am", thu: "10 am - 11 am"}, classroom: "F-15"}
  ];
  console.log(subjects);
  res.render('subjects/index', {subjects: subjects});
});

router.get('/new', function(req, res, next){
  res.render('subjects/new', {});
  //se necesita agregar un post para registrar nuevas materias
});

router.get('/modify', function(req, res, next){
  res.render('subjects/new', {});
  //se cambiará esta ruta a /modify/[:id] y se rellenarán los campos del
  //form de la materia con los que ya se tienen registrados
});

module.exports = router;
