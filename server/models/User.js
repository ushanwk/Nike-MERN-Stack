const mongoose = require('mongoose')
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    name: {type: String, require: true, min: 2},
    email: {type: String, require: true, min: 2, unique: true},
    password: {type: String, require: true, min: 2},
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;