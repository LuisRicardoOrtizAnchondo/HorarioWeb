const express = require('express');
const passport = require('passport');
const Account = require('../models/account');

function index(req, res, next){
  res.render('index', { user : req.user });
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
