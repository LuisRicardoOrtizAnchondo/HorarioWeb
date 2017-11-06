const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

var Test = new Schema({
    user: {type: ObjectId, ref: 'account'},
    temary: String,
    isPublic: Boolean,
    due: Date,
    subject: {type: ObjectId, ref: 'subject'},
    group: {type: ObjectId, ref: 'group'}
});

Test.plugin(passportLocalMongoose);

module.exports = mongoose.model('Test', Test);
