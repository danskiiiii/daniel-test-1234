const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName: String,
    lastName: String,
});

module.exports = UserSchema;
