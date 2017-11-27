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

    Homework.find({'owner': req.user._id}, function(err, homeworks){
        //if(homeworks == []){
        // return res.render('homework/new'); //añadir flash invitandolo a crear una tarea
        // }else{}
        if(err){
            console.log("Error: " + err);
        }else{
            return res.render('homework/index', {homeworks: homeworks});
        }
    })
}

function saveHomework(req, res, next){
    console.log('Conteniduki');
    console.log(req.body);
    let newHomework = new Homework();
    newHomework.description = req.body.description;
    newHomework.isDone = false;
    newHomework.due = new Date(req.body.due.replace( /(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"));
    //newHomework.subject = Homework.find({'owner' : req.user._id,  });
    Subject.find({'name': req.body.subject, 'owner': req.user._id}, function(err, result){
        console.log(result);
        newHomework.subject = result[0]._id;
        console.log('MateriaID: ' + newHomework.subject);
    });
    //newHomework.subject = subjects._id;
    console.log("looking");
    //console.log(subjects);

    //newHomework.subject = ;
    newHomework.owner = req.user._id;//user._id puede ser

    Subject.find({'owner': req.user._id}, function(err, subject){
        if(err){
            console.log("Error fue: " + err);
        }else{
            let subjects = subject;
            console.log(subjects);
            //return res.render('homework/new', {subjects: subjects});
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
                    return res.render('homework/new', { subjects: subjects });

                }
            })
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
