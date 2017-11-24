function findUserHomeworks(req, res, next){
  //Se debe hacer una consulta de todas las tareas que existen para esa cuenta
  // la variable de abajo demuestra como son los objetos de homework y lo que se debe enviar
  // excepto en la parte de la materia, donde se deberia guardar su id y no el Nombre
  let homeworks = [
    {description: "Investigar las partes de la célula y hacer un resumen", due: "11/29/2017 7:00 PM", isDone: false, isPublic: false, subject: "Quimica"},
    {description: "Hacer ejercicios de libro de física de la página 124", due: "11/27/2017 6:00 PM", isDone: false, isPublic: false, subject: "Fisica"}
  ];
  res.render('homework/index', {homeworks: homeworks});
}

function newHomework(req, res, next){
  // se debe hacer una consulta de todas las materias que existen para esa cuenta
  let subjects = [
    {name: "Fisica"},
    {name: "Quimica"}
  ];
  res.render('homework/new', {subjects: subjects});
}

function modifyHomework(req, res, next){
  res.render('layout_logged', {});
} 

module.exports = {
  newHomework,
  findUserHomeworks,
  modifyHomework
};