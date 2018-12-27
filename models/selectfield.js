const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const selectFieldDefinition = {
    question: String,
    options: Array
};

const selectFieldSchema = new Schema(selectFieldDefinition);
const selectfield = mongoose.model('selectfield', selectFieldSchema);
module.exports = selectfield;