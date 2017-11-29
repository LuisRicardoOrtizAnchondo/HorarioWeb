const express = require('express');
const Homework = require('../models/homework');
const Subject = require('../models/subject');

function newHomework(req, res, next) {
    Subject.find({'owner': req.user._id}, function(err, subject){
        if(err){
            // console.log("Error fue: " + err);
        }else{
            let subjects = subject;
            // console.log(subjects);
            return res.render('homework/new', {subjects: subjects, user : req.user});
        }
    });
}

function markHomeworkAsDone(req, res, next){
    let find = {
        _id: req.body.homeworkId,
        owner: req.user._id
    }
    let replace = {
        isDone: res.body.isDone,
    };
    Homework.findOneAndUpdate(find, replace, function(err, homework){
        console.log("Marcado como done (o desmarcado)");
    })
}

function saveHomework(req, res, next){

  // { description: 'jkjk', due: '28/11/2017', subject: 'Física' }

  // Subject.find({'name': req.body.subject, 'owner': req.user._id}, function(err, result){
  //   if (err) {
  //     console.log("An error occurred");
  //   } else {
  //     console.log("este es mi result: " + result);
  //
  //     console.log("########## dentro de save #################");
  //
  //     let homework = new Homework({
  //       description: req.body.description,
  //       isDone: false,
  //       due: req.body.due,
  //       subject: result._id,
  //       owner: req.user
  //     });
  //
  //     console.log(homework);
  //
  //     homework.save( err => {
  //       if(err){
  //         console.log(err);
  //         res.redirect('new');
  //       } else {
  //         console.log("exito!");
  //         res.redirect('new');
  //       }
  //     });
  //   }
  // });

  let homework = new Homework({
    description: req.body.description,
    isDone: false,
    due: req.body.due,
    subject: req.body.subject,
    owner: req.user._id
  });

  homework.save( err => {
    if(err){
      console.log(err);
      res.redirect('new');
    } else {
      console.log("exito!");
      res.redirect('/homework');
    }
  });


  // console.log('Conteniduki');
  // console.log(req.body);
  // let newHomework = new Homework();
  // newHomework.description = req.body.description;
  // newHomework.isDone = false;
  // newHomework.due = req.body.due //new Date(req.body.due.replace( /(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"));
  // //newHomework.subject = Homework.find({'owner' : req.user._id,  });
  // Subject.find({'name': req.body.subject, 'owner': req.user._id}, function(err, result){
  //     console.log(result);
  //     newHomework.subject = result[0]._id;
  //     console.log('MateriaID: ' + newHomework.subject);
  // });
  // //newHomework.subject = subjects._id;
  // console.log("looking");
  // //console.log(subjects);
  //
  // //newHomework.subject = ;
  // newHomework.owner = req.user;//user._id puede ser
  //
  // Subject.find({'owner': req.user._id}, function(err, subject){
  //     if(err){
  //         console.log("Error fue: " + err);
  //     }else{
  //         let subjects = subject;
  //         console.log(subjects);
  //         //return res.render('homework/new', {subjects: subjects});
  //         newHomework.save(function (err, homeworks) {
  //             if (err) {
  //                 console.log(err)
  //                 console.log('No se guardo the Homework rayos D:')
  //                 return res.render('homework/new', { error : err.message });
  //             } else {
  //                 console.log('Tarea guardada con exito!!')
  //                 res.header("Access-Control-Allow-Origin", "*");
  //                 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,; Accept");
  //                 //return res.render('Homework/newHomework', { Homework, user : req.user });
  //                 return res.render('homework/new', {subjects: subjects , user : req.user});
  //
  //             }
  //         })
  //     }
  // })

}


function findUserHomeworks(req, res, next){

  Homework.find({'owner': req.user._id}, function(err, homeworks){
      //if(homeworks == []){
      // return res.render('homework/new'); //añadir flash invitandolo a crear una tarea
      // }else{}
      if(err){
          console.log("Error: " + err);
      }else{
          return res.render('homework/index', {homeworks: homeworks, user : req.user});
      }
  });

}


function modifyHomework(req, res, next){
    //Find a record with given id
    let find = {
        _id: req.body.homeworkId,
        owner: req.user._id
    }
    //Put any data the request have into an object
    let replace = {
        description: res.body.description,
        isDone: res.body.isDone,
        due: res.body.due,
        subject: res.body.subject
    };
    Homework.findOneAndUpdate(find, replace, function (err, homework) {
        console.log("Modificando tarea: ");
        console.log(homework);
    })

    res.render('layout_logged', {user : req.user});
}

function modifyHomeworkView(req, res, next){
    res.render('homework/modify', {user : req.user});
}


module.exports ={
  //show,
  newHomework,
  findUserHomeworks,
  saveHomework,
  modifyHomework,
  modifyHomeworkView,
  markHomeworkAsDone
};
