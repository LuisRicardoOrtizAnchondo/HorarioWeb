const express = require('express');
const Subject = require('../../models/subject');

function newSubject(req, res, next) {
    Subject.register(new Subject({ name : req.body.name, teacher : req.body.teacher, horario: req.body.horario, classroom: req.body.classroom }), (err, subject) => {
        if (err) {
          return res.render('subject/newSubject', { error : err.message });
        }else{
          return res.render('subject/newSubject', { subject });
        }
    });
}

module.exports ={
  newSubject
};
