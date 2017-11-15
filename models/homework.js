const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;
const passportLocalMongoose = require('passport-local-mongoose');

var Homework = new Schema({
    description: String,
    isDone: Boolean,
    due: Boolean, // formato de fecha 11/29/2017 7:00 PM -> mes/dia/año hora
    isPublic: Boolean,
    subject: {type: ObjectId, ref: 'subject'},
    group: {type: ObjectId, ref: 'group'}
});

Homework.plugin(passportLocalMongoose);

module.exports = mongoose.model('Homework', Homework);
