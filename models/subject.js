const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;
const passportLocalMongoose = require('passport-local-mongoose');

var Subject = new Schema({
    name: String,
    teacher: String,
    color: String,
    schedule: [{day: String, start: String, end: String}],
    owner: {type: ObjectId, ref: 'account'},
    classroom: String
});

Subject.plugin(passportLocalMongoose);

module.exports = mongoose.model('Subject', Subject);
