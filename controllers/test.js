const express = require('express');
const Test = require('../models/test');
const Subject = require('../models/subject');

function show(req, res, next){

    let subjects = Subject.find({'owner' : req.user._id});

    res.render('test/new', {subjects: subjects});
    Test.find({owner: req.user._id}).exec(function (err, test) {
      if (err) {
        res.render('/', { error: 'Ocurrio un error inesperado' })
      } else {
        res.render('test/show', { test })
      }
})
}

function findTest(req, res, next){
    /*let tests = [
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
    ];*/
    //return res.render('test/index', {tests: tests});

    Test.find({'user': req.user._id}, function(err, tests){
        //if(tests == []){
        // return res.render('test/new'); //añadir flash invitandolo a crear un examen
        // }else{}
        if(err){
            console.log("Error: " + err);
        }else{
            console.log("Noticias");
            console.log(tests);
            return res.render('test/index', {tests: tests});
        }
    })
}

function newTest(req, res, next) {
    Subject.find({'owner' : req.user._id}).exec(function(err, subjects){
        res.render('test/new', {subjects: subjects});
    });
}

function saveTest(req, res, next){
    console.log("Cuerpo del test request:");
    console.log(req.body);
    Subject.find({'name': req.body.subject, 'owner': req.user._id}, function(err, subjects){
        if(err){
            console.log("Error: " + err);
        }
        let newTest = new Test();
        newTest.user = req.user._id;
        newTest.topics = req.body.testTopics;
        newTest.due = new Date(req.body.due.replace( /(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"));
        newTest.subject = subjects[0]._id;
        console.log(subjects);
        console.log('MateriaID (Test): ' + newTest.subject);
        //return res.render('test/new', {subjects: subjects});
        newTest.save(function (err, test) {
            if(err){

                console.log("Error fue: " + err);
            }else{
            Subject.find({'owner' : req.user._id}).exec(function(err, subjects){

                if (err) {
                    console.log("El error fue:" + err)
                    console.log('No se guardo el examen, rayos D:');
                    //res.render('subject/newSubject', { error : err.message });
                    return res.render('test/new', {message: "Test no guardado :c", subjects: subjects});
                } else {
                    console.log('Test guardado con exito!!')
                    res.header("Access-Control-Allow-Origin", "*");
                    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,; Accept");
                    //return res.render('subject/newSubject', { subject, user : req.user });
                    //res.render('subject/newSubject', { user : req.user });
                    return res.render('test/new', {message: "Test guardado con exito!", subjects: subjects});

                }
            });
            }
        })

    });


}

function modifyTest(req, res, next){
    res.render('layout_logged', {});
}

module.exports = {
  show,
  findTest,
  newTest,
  saveTest,
  modifyTest
};
