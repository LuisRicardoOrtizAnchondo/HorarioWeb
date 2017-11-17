const express = require('express');
const Homework = require('../models/homework');

function newHomework(req, res, next) {
if(req.user){
    //Account.findById(req.user._id, function (err, user) {
            //if (err) {
                //res.render('new', {error: 'Hubo un error inesperado'})
            //}else{
              if (err) {
                return res.render('homework/index', { error : err.message });
              }else{
                return res.render('/', { homework });
              }
              let newHomework = new Homework();
              newHomework.owner = user;//user._id puede ser
              newHomework.name = req.body.name;
              newHomework.teacher = req.body.teacher;
              newHomework.horario = req.body.horario;
              newHomework.classroom = req.body.classroom;

            //}
            newHomework.save(function (err, document) {
                if (err) {
                    console.log(err)
                    console.log('No se guardo the Homework rayos D:')
                    return res.render('Homework/newHomework', { error : err.message });
                } else {
                    console.log('Tarea guardada con exito!!')
                    res.header("Access-Control-Allow-Origin", "*");
                    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,; Accept");
                    //return res.render('Homework/newHomework', { Homework, user : req.user });
                    return res.render('homework/newomework', { user : req.user });
                  
                }
            })

  //})
/*
}else{
  res.send('/login')
}*/
}
}


function findUserHomework(req, res, next){
  //encontrar todas las materias que posee el usuario
  //si no se tienen materias renderizar vista que invita a crear una materia
  Homework.find({owner: req.user._id}).exec(function (err, Homeworks) {
      if (err) {
        res.render('home', { error: 'Ocurrio un error inesperado' })
      } else {
        res.render('Homeworks/show_all', { Homeworks: Homeworks, user : req.user })
      }
  })
}



module.exports ={
  //show,
  newHomework,
  findUserHomework
};
