const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var Document = new Schema({
    user: {type: ObjectId, ref: 'account'},
    title: String,
    content: String,
    date: Date,
    category: String//,
    //docx: File
    //subject: {type: ObjectId, ref: 'subject'},
    //group: [{type: ObjectId, ref: 'group'}]
});

//Document.plugin(passportLocalMongoose);

module.exports = mongoose.model('Document', Document);
