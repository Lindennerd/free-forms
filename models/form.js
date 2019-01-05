const mongoose = require('mongoose');
const md5 = require('md5');
const Schema = mongoose.Schema;

const formSchema = new Schema({
    name: String,
    createdAt: Date,
    validUntil: Date,
    password: String,
    fields: Array
});

formSchema.pre('save', function(next){
    this.password = md5(this.password);
    next();
});

const form = mongoose.model('form', formSchema);

module.exports = form;