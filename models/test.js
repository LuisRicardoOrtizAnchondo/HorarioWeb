const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;
const passportLocalMongoose = require('passport-local-mongoose');

var Test = new Schema({
    user: {type: ObjectId, ref: 'account'},
    topics: [String],
    due: Date,
    subject: {type: ObjectId, ref: 'subject'},
});

Test.plugin(passportLocalMongoose);

module.exports = mongoose.model('Test', Test);
