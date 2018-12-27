const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const textFieldSchema = new Schema({
    question: String,
    default: String,
    size: {
        max: Number,
        min: Number,
    }
});

const textfield = mongoose.model('textfield', textFieldSchema);
module.exports = textfield;