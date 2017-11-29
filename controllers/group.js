const express = require('express');
const Group = require('../models/group');

function newGroup(req, res, next){
    res.render('groups/new', {user : req.user});
}

function saveGroup(req, res, next){
    if (req.body.name != '' && req.body.subject != ''){
        let newGroup = new Group({
            name: req.body.name,
            subject: req.body.subject,
            members: req.body.members,
            homeworks: req.body.homeworks,
            owner: req.user._id
        });

        group.save( err => {
            if(err){
                console.log(err);
                res.redirect('new');
            } else {
                console.log("exito!");
                res.redirect('/group');
            }
        });
    }else{
        res.render('group/new',{message: 'Por favor, rellena el nombre del grupo y su materia'});
    }
}

function findGroup(req, res, next){

    Group.find({'user': req.user._id}, function(err, groups){
        //if(tests == []){
        // return res.render('test/new'); //añadir flash invitandolo a crear un examen
        // }else{}
        if(err){
            console.log("Error: " + err);
        }else{
            console.log("Grupos encontrados:");
            console.log(groups);
            return res.render('group/index', {groups: groups, user : req.user});
        }
    })
}

function modifyGroup(req, res, next){
    //Find a record with given id
    let find = {
        _id: req.body.groupId,
        owner: req.user._id
    }
    //Put any data the request have into an object
    let replace = {
        name: res.body.name,
        homeworks: res.body.due,
        members: res.body.members,
        subject: res.body.subject,
    };

    Test.findOneAndUpdate(find, replace, function (err, group) {
        console.log("Modificando grupo: ");
        console.log(group);
    })

    res.render('layout_logged', {user : req.user, group: group, message: 'Grupo creado exitosamente!'});
}

function modifyGroupView(req, res, next){
    Group.find({'owner': req.user._id, '_id': req.params.id}, function(err, group) {
        res.render('group/new', {group: group});
    })
}

function addUserToGroup(req, res, next){

}

module.exports ={
  newGroup,
  findGroup,
  saveGroup,
  modifyGroup,
  modifyGroupView,
  addUserToGroup
};
