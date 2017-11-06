const express = require('express');
const Homework = require('../models/homework');

function show(req, res, next){
   Homework.find({owner: req.user._id}).exec(function (err, homework) {
      if (err) {
        res.render('homework/index', { error: 'Ocurrio un error inesperado' })
      } else {
        res.render('homework/index', { homework })
      }
})
}

function newGroup(req, res, next) {
    Homework.register(new Group({ name : req.body.name }), (err, homework) => {
        if (err) {
          return res.render('homework/index', { error : err.message });
        }else{
          return res.render('/', { homework });
        }
    });
}

module.exports ={
  show,
  newGroup
};
