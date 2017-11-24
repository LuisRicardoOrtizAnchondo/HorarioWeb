const subjectController = require('../controllers/subject');

function findSubject(req, res, next){
  //encontrar todas las materias que posee el usuario
  //si no se tienen materias renderizar vista que invita a crear una materia
  let subjects = [
    {name: "Física", teacher: "Lorenzo Armendariz", schedule: [{day: "Lunes", start: "10:00 AM", end: "11:00 AM"}], classroom: "E-27"},
    {name: "Química", teacher: "Teresa González", schedule: [{day: "Martes", start: "10:00 AM", end: "11:00 AM"}], classroom: "F-31"}
  ];
  res.render('subjects/index', {subjects: subjects});
}

function newSubject(req, res, next){
  res.render('subjects/new', {});
  //se necesita agregar un post para registrar nuevas materias
}

function saveSubject(req, res, next){
  res.render('subjects/new', {});
  //se necesita agregar un post para registrar nuevas materias
}

function modifySubject(req, res, next){
  res.render('subjects/new', {});
  //se cambiará esta ruta a /modify/[:id] y se rellenarán los campos del
  //form de la materia con los que ya se tienen registrados
}

module.exports = {
  findSubject,
  newSubject,
  saveSubject,
  modifySubject
};