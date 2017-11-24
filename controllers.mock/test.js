function findTest(req, res, next){
  let tests = [
    {
      topics: ["Calcular distancia recorrida", "Calcular velocidad", "Qué son los vectores"],
      due: "11/20/2017 7:00 PM",
      subject: "Fisica"
    },
    {
      topics: ["Tipos de mezclas", "Balanceo de ecuaciones", "Familias de los elementos"],
      due: "11/27/2017 8:00 PM",
      subject: "Quimica"
    },
  ];
  res.render('test/index', {tests: tests});
}

function newTest(req, res, next){
  let subjects = [
    {name: "Fisica"},
    {name: "Quimica"}
  ];
  res.render('test/new', {subjects: subjects});
}

function modifyTest(req, res, next){
  res.render('layout_logged', {});
}

module.exports = {
  findTest,
  newTest,
  modifyTest
};
