const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Document = new Schema({
    user: {type: ObjectId, ref: 'account'},
    content: String,
    date: Date,
    category: String//,
    //subject: {type: ObjectId, ref: 'subject'},
    //group: [{type: ObjectId, ref: 'group'}]
});

Document.plugin(passportLocalMongoose);

module.exports = mongoose.model('Document', Document);
