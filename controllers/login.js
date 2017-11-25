const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
const Subject = require('../models/subject')
function index(req, res, next){
  // Se tiene que hacer una consulta de las materias que
  // están registradas con el _id del usuario de la sesión
  // correspondiente para pasarlas como parámetro al momento
  // de renderizar index
  let subjects = [
    {name: "Matemáticas", teacher: "Rosa Palazuelos", schedule: [{day: "Miercoles", start: "10:00", end: "11:00"}, {day: "Viernes", start: "12:00", end: "13:00"}], classroom: "E-27", color: "pink"},
    {name: "Biología", teacher: "Ramón López", schedule: [{day: "Martes", start: "09:00", end: "10:00"}, {day: "Jueves", start: "09:00", end: "10:00"}], classroom: "E-27", color: "grey"},
    {name: "Física", teacher: "Lorenzo Armendariz", schedule: [{day: "Lunes", start: "10:00", end: "11:00"}, {day: "Miercoles", start: "12:00", end: "13:00"}], classroom: "E-27", color: "yellow"},
    {name: "Química", teacher: "Teresa González", schedule: [{day: "Lunes", start: "11:00", end: "12:00"}, {day: "Martes", start: "10:00", end: "11:00"}, {day: "Jueves", start: "08:00", end: "09:00"}], classroom: "F-31", color: "green"}
  ];
  /*if(req.user){
    let subjects = Subject.find({'owner' : req.user._id})
    res.render('index', { user : req.user, subjects: subjects });
  }else{*/
    res.render('index', { user : req.user, subjects: subjects});
  //}
}

function subscribe(req, res, next) {
    Account.register(new Account({ username : req.body.username, email: req.body.email }), req.body.password, (err, account) => {
        if (err) {
          return res.render('index', { error : err.message });
        }
        passport.authenticate('local')(req, res, () => {
            req.session.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    });
}

function login(req, res, next){
    res.render('login/login', { user : req.user });
}

function logout(req, res, next) {
    //As seen in passport's documentation
    req.logout();
    res.redirect('/');
}

function auth(req, res, next){
  if (req.user) {
    next()
  } else {
    res.redirect('/')
  }
}
/*
function uploadAvatar(req, res) {
  db.collection.find({'imgId':req.params.id}, function(err,data) {
      var base64Image = var img = new Buffer(data.imgDataField, 'base64');
      res.writeHead(200, {
        'Content-Type': 'image/jpeg',
        'Content-Length': base64Image.buffer.length
      });
      res.end(base64Image.buffer);
  }
}
*/
module.exports ={
  index,
  subscribe,
  logout,
  login,
  auth
  //uploadAvatar
};
