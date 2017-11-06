const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

var Subject = new Schema({
    name: String,
    teacher: String,
    horario: String,
    groups: [String],
    owner: {type: ObjectId, ref: 'account'},
    classroom: Integer
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