const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;
const passportLocalMongoose = require('passport-local-mongoose');

var Homework = new Schema({
    description: String,
    isDone: Boolean,
    due: String, // formato de fecha -> dia/mes/año
    subject: String, //{type: ObjectId, ref: 'subject'},
    owner: {type: ObjectId, ref: 'account', index: {unique: false}}
});

Homework.plugin(passportLocalMongoose);

module.exports = mongoose.model('Homework', Homework);
