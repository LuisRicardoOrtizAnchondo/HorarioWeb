const express = require('express');
const Homework = require('../models/homework');
const Subject = require('../models/subject');
function newHomework(req, res, next) {

    /*let subjects = [
        {name: "Fisica"},
        {name: "Quimica"}
    ];*/

    Subject.find({'owner': req.user._id}, function(err, subject){
        if(err){
            console.log("Error fue: " + err);
        }else{
            let subjects = subject;
            console.log(subjects);
            return res.render('homework/new', {subjects: subjects});
        }
    })
/*
    let subjects = Subject.find({'owner': req.user._id});
    console.log('Arreglo: ' + subjects);
    console.log(subjects.Schema);
    return res.render('homework/new', {subjects: subjects});
    */
}


function findUserHomeworks(req, res, next){
  //encontrar todas las materias que posee el usuario
  //si no se tienen materias renderizar vista que invita a crear una materia
    /*
  Homework.find({owner: req.user._id}).exec(function (err, Homeworks) {
      if (err) {
        res.render('home', { error: 'Ocurrio un error inesperado' })
      } else {
        res.render('Homeworks/show_all', { Homeworks: Homeworks, user : req.user })
      }
  })*/
    let homeworks = [
        {description: "Investigar las partes de la célula y hacer un resumen", due: "11/29/2017 7:00 PM", isDone: false, isPublic: false, subject: "Quimica"},
        {description: "Hacer ejercicios de libro de física de la página 124", due: "11/27/2017 6:00 PM", isDone: false, isPublic: false, subject: "Fisica"}
    ];
    return res.render('homework/new', {homeworks: homeworks});
}

function saveHomework(req, res, next){
    console.log('Conteniduki');
    //console.log('Conteniduki' + req.body);
    let newHomework = new Homework();
    newHomework.description = req.body.description;
    newHomework.teacher = req.body.teacher;
    newHomework.isDone = req.body.isDone;
    //newHomework.due = req.body.due;
    //newHomework.subject = Homework.find({'owner' : req.user._id,  });
    Subject.find({'name': req.body.name, 'owner': req.user._id}, function(err, result){
        newHomework.subject = result._id;
        console.log('MateriaID: ' + newHomework.subject);
    });
    //newHomework.subject = ;
    newHomework.owner = req.user._id;//user._id puede ser

    newHomework.save(function (err, homeworks) {
        if (err) {
            console.log(err)
            console.log('No se guardo the Homework rayos D:')
            return res.render('homework/new', { error : err.message });
        } else {
            console.log('Tarea guardada con exito!!')
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,; Accept");
            //return res.render('Homework/newHomework', { Homework, user : req.user });
            return res.render('homework/index', { homeworks : homeworks });

        }
    })
}

function modifyHomework(req, res, next){
    res.render('layout_logged', {});
}


module.exports ={
  //show,
  newHomework,
  findUserHomeworks,
  saveHomework,
  modifyHomework
};
