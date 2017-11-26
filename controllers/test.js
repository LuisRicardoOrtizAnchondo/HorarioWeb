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

function findTest(){

}

function newTest(req, res, next) {
    Subject.find({'owner' : req.user._id}).exec(function(err, subjects){
        res.render('test/new', {subjects: subjects});
    });
}

function saveTest(req, res, next){
    res.render('test/new', {subjects: subjects});
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
