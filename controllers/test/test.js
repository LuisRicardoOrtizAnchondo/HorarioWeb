const express = require('express');
const Test = require('../../models/test');

function show(req, res, next){
   Test.find({owner: req.user._id}).exec(function (err, test) {
      if (err) {
        res.render('/', { error: 'Ocurrio un error inesperado' })
      } else {
        res.render('test/show', { test })
      }
})
}


function newTest(req, res, next) {
    Test.register(new Document({ name : req.body.name }), (err, test) => {
        if (err) {
          return res.render('/', { error : err.message });
        } else {
          return res.render('/', { test });
        }
    });
}

module.exports = {
  show,
  newTest
};
