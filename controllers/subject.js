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
    owner: req.user._id,
    classroom: req.body.subjectClassroom
  });

  console.log("###### materia #########");
  console.log(subject);

  subject.save( err => {
    if(err){
      console.log(err);
      res.render('subjects/new', {message: "No se pudo guardar materia!", user : req.user});
    } else {
      res.render('subjects/new', {message: "Materia guardada con exito!", user : req.user});
    }
  });
}

function findSubject(req, res, next){
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
/*
function modifySubject(req, res, next){

    res.render('subjects/new', {user : req.user});
    //se cambiará esta ruta a /modify/[:id] y se rellenarán los campos del
    //form de la materia con los que ya se tienen registrados
}
*/

function modifySubject(req, res, next){
    //Find a record with given id
    let find = {
        _id: req.body.homeworkId,
        owner: req.user._id
    }
    //Put any data the request have into an object
    let replace = {
        name: res.body.subjectName,
        teacher: res.body.subjectTeacher,
        color: res.body.subjectColor,
        due: req.body.subjectDue,
        subject: res.body.subject,
        schedule: mySchedule,
        owner: req.user._id,
        classroom: req.body.subjectClassroom
    };
    let mySchedule = [];

    for (let i = 0; i < req.body.subjectDay.length; i++) {
        mySchedule[i] = {day: req.body.subjectDay[i], start: req.body.subjectStart, end: req.body.subjectEnd}
    }
    Subject.findOneAndUpdate(find, replace, function (err, subject) {
        console.log("Modificando materia: ");
        console.log(subject);
    })

    res.render('layout_logged', {user : req.user});
}

function modifySubjectView(req, res, next){
    //Sacar toda la info usando el id entregado
    Subject.find({'owner': req.user._id, '_id': req.params.id}, function(err, subject){
        res.render('homework/new', {user : req.user, subject: subject});
    })
}


module.exports ={
  newSubject,
  findSubject,
  saveSubject,
  modifySubject,
  modifySubjectView
};
