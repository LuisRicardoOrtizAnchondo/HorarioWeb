const express = require('express');
const Subject = require('../models/subject');
const Account = require('../models/account');
const passport = require('passport');

function newSubject(req, res, next){
  res.render('subjects/new', {user : req.user});
}

function saveSubject(req, res, next){

  let mySchedule = [];

  for (let i = 0; i < req.body.subjectDay.length; i++) {
    mySchedule[i] = {day: req.body.subjectDay[i], start: req.body.subjectStart, end: req.body.subjectEnd}
  }

  let subject = new Subject({
    name: req.body.subjectName,
    teacher: req.body.subjectTeacher,
    color: req.body.subjectColor,
    schedule: mySchedule,
    owner: req.user,
    classroom: req.body.subjectClassroom
  });

  subject.save( err => {
    if(err){
      res.render('subjects/new', {message: "No se pudo guardar materia!", user : req.user});
    } else {
      res.render('subjects/new', {message: "Materia guardada con exito!", user : req.user});
    }
  });
}

function findSubject(req, res, next){
	//encontrar todas las materias que posee el usuario
  //si no se tienen materias renderizar vista que invita a crear una materia

    Subject.find({'owner': req.user._id}, function(err, subjects){
        //if(homeworks == []){
        // return res.render('homework/new'); //añadir flash invitandolo a crear una tarea
        // }else{}
        if(err){
            console.log("Error: " + err);
        }else{
            return res.render('subjects/index', {subjects: subjects, user : req.user});
        }
    })

}

function modifySubject(req, res, next){
    res.render('subjects/new', {user : req.user});
    //se cambiará esta ruta a /modify/[:id] y se rellenarán los campos del
    //form de la materia con los que ya se tienen registrados
}



module.exports ={
  newSubject,
  findSubject,
  saveSubject,
  modifySubject

};
