const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSubmition = new Schema({
    form: Schema.Types.ObjectId,
    submittedIn: Schema.Types.Date,
    questions: Array
});

const formSubmitionModel = mongoose.model('formSubmition', formSubmition);

module.exports = formSubmitionModel;