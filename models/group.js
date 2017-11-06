const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;
const passportLocalMongoose = require('passport-local-mongoose');

var Group = new Schema({
    name: String,
    subject: {type: ObjectId, ref: 'subject'},
    members: [{type: ObjectId, ref: 'account'}],
    owner: {type: ObjectId, ref: 'account'},
    homework: [{type: ObjectId, ref: 'homework'}]
});
/*
my.namespace.ColorEnum = {
    RED : 0,
    GREEN : 1,
    BLUE : 2
}
*/


Group.plugin(passportLocalMongoose);

module.exports = mongoose.model('Group', Group);
