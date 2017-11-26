const express = require('express');
const Subject = require('../models/subject');
const Account = require('../models/account');
const passport = require('passport');

function newSubject(req, res, next){

    let subjects = Subject.find({'owner' : req.user._id})

    res.render('subjects/new', {subjects: subjects});
    // se debe hacer una consulta de todas las materias que existen para esa cuenta

}


//function newSubject(req, res, next) {

    //Account.findById(req.user._id, function (err, user) {
            //if (err) {
                //res.render('new', {error: 'Hubo un error inesperado'})
                //res.render('subjects/new', {error: 'Hubo un error inesperado'})
            //}else{

//}

function findSubject(req, res, next){
	//encontrar todas las materias que posee el usuario
  //si no se tienen materias renderizar vista que invita a crear una materia
  Subject.find({owner: req.user._id}).exec(function (err, subjects) {
      if (err) {
        res.render('home', { error: 'Ocurrio un error inesperado' })
      } else {
        res.render('subjects/show_all', { subjects: subjects, user : req.user })
      }
	})

}

function saveSubject(req, res, next){
    //res.render('subjects/new', {});
    console.log(req.body)




    console.log("Instanciando materia");
    let newSubject = new Subject();
    newSubject.owner = req.user._id;//user._id
    newSubject.name = req.body.subjectName;
    newSubject.teacher = req.body.subjectTeacher;
    //newSubject.color = req.body.color
    //newSubject.horario = req.body.horario;
    //newSubject.day = req.body.subjectDay;
    //newSubject.start = req.body.subjectStart;
    //newSubject.end = req.body.subjectEnd;
    //subjectDay: req.body.subjectDay,
    //newSubject.schedule = [{ subjectStart: req.body.subjectStart, subjectEnd: req.body.subjectEnd}],
    newSubject.schedule.day = req.body.subjectDay,
    newSubject.schedule.start = req.body.subjectStart;
    newSubject.schedule.end = req.body.subjectEnd;
    newSubject.classroom = req.body.subjectClassroom;

    console.log("A punto de salvar");

    newSubject.save(function (err, subject) {
        if (err) {
            console.log("El error fue:" + err)
            console.log('No se guardo the subject rayos D:');
            //res.render('subject/newSubject', { error : err.message });
            res.render('subjects/new', {message: "Materia no guardada :c"});
            return
        } else {
            console.log('Materia guardada con exito!!')
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,; Accept");
            //return res.render('subject/newSubject', { subject, user : req.user });
            //res.render('subject/newSubject', { user : req.user });
            res.render('subjects/index', {message: "Materia guardada con exito!"});
            return

        }
    })


    //se necesita agregar un post para registrar nuevas materias
}

function modifySubject(req, res, next){
    res.render('subjects/new', {});
    //se cambiará esta ruta a /modify/[:id] y se rellenarán los campos del
    //form de la materia con los que ya se tienen registrados
}



module.exports ={
  newSubject,
  findSubject,
  saveSubject,
  modifySubject

};
