const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;
const passportLocalMongoose = require('passport-local-mongoose');

var Subject = new Schema({
    name: String,
    teacher: String,
    schedule: [{day: String, start: String, end: String}],
    groups: [String],
    owner: {type: ObjectId, ref: 'account'},
    classroom: String
});
/*
my.namespace.ColorEnum = {
    RED : 0,
    GREEN : 1,
    BLUE : 2
}
*/


Subject.plugin(passportLocalMongoose);

module.exports = mongoose.model('Subject', Subject);
