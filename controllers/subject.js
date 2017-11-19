const express = require('express');
const Subject = require('../models/subject');
const Account = require('../models/account');
const passport = require('passport');

function newSubject(req, res, next) {
if(req.user && req.user._id !== '' ){
    //Account.findById(req.user._id, function (err, user) {
            //if (err) {
                //res.render('new', {error: 'Hubo un error inesperado'})
                res.render('subjects/new', {error: 'Hubo un error inesperado'})
            //}else{
            	let newSubject = new Subject();
            	newSubject.owner = user._id;//user._id
            	newSubject.name = req.body.name;
            	newSubject.teacher = req.body.teacher;
            	newSubject.horario = req.body.horario;
            	newSubject.classroom = req.body.classroom;

            //}

            newSubject.save(function (err, subject) {
                if (err) {
                    console.log(err)
                    console.log('No se guardo the subject rayos D:');
                    res.render('subject/newSubject', { error : err.message });
                    return
                } else {
                    console.log('Materia guardada con exito!!')
                    res.header("Access-Control-Allow-Origin", "*");
                    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,; Accept");
                    //return res.render('subject/newSubject', { subject, user : req.user });
                    res.render('subject/newSubject', { user : req.user });
                    return

                }
            })

	//})
/*
}else{
	res.send('/login')
}*/
}
}

function findUserSubject(req, res, next){
	//encontrar todas las materias que posee el usuario
  //si no se tienen materias renderizar vista que invita a crear una materia
  Subject.find({owner: req.user._id}).exec(function (err, subjects) {
      if (err) {
        res.render('home', { error: 'Ocurrio un error inesperado' })
      } else {
        res.render('subjects/show_all', { subjects: subjects, user : req.user })
      }
	})
<<<<<<< HEAD

=======
>>>>>>> d888d35a2e2de1c485019fc826fa9953fd6ca40e
}

module.exports ={
  newSubject,
  findUserSubject
};
