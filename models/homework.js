const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

var Homework = new Schema({
    description: String,
    isDone: Boolean,
    due: Boolean,
    //isPublic: Boolean, //Tal vez con que tenga grupo ya automaticamente sea true, o mas bien sin isPublic
    subject: {type: ObjectId, ref: 'subject'},
    group: {type: ObjectId, ref: 'group'}
});

Homework.plugin(passportLocalMongoose);

module.exports = mongoose.model('Homework', Homework);
