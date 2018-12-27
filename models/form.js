const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({
    name: String,
    createdAt: Date,
    validUntil: Date,
    fields: Array
});

const form = mongoose.model('form', formSchema);

module.exports = form;