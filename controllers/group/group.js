const express = require('express');
const Group = require('../../models/group');

function show(req, res, next){
   Group.find({owner: req.user._id}).exec(function (err, groups) {
      if (err) {
        res.render('group/index', { error: 'Ocurrio un error inesperado' })
      } else {
        res.render('group/index', { groups })
      }
})
}


function newGroup(req, res, next) {
    Group.register(new Group({ name : req.body.name }), (err, group) => {
        if (err) {
          return res.render('/', { error : err.message });
        }
    });
}

module.exports ={
  show,
  newSubject
};
