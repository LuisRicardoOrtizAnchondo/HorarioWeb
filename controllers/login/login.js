const express = require('express');
const passport = require('passport');
const Account = require('../../models/account');

function index(req, res, next){
  res.render('index', { user : req.user });
}

function subscribe(req, res, next) {
    Account.register(new Account({ username : req.body.username }), req.body.password, (err, account) => {
        if (err) {
          return res.render('login/subscribe', { error : err.message });
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

function logout(req, res, next) {
    req.logout();
    res.redirect('/');
}

module.exports ={
  index,
  subscribe,
  logout
};
