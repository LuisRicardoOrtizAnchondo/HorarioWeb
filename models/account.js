const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    local: {
        username: String,
        email: String,
        password: String
    },
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String
    }
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);
