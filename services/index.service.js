const mongoose = require('mongoose');
const fieldTypes = require('../resources/fieldType');

const textfield = require('../models/textfield');
const selectfield = require('../models/selectfield');

function indexService() {

    function getFieldTypes() {
        return fieldTypes;
    }


    return {
        getFieldTypes: getFieldTypes,
    }
}

module.exports = new indexService();