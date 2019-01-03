var express = require('express');
var formsModel = require('../models/form');
var formSubmition = require('../models/formSubmition');
var mongoose = require('mongoose');

var router = express.Router();

router.get('/:id', function(req, res, next) {
    res.render('form', {id: req.params.id});
});

router.get('/getById/:id', function(req, res, next) {
    const id = req.params.id.trim();

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(401).send('Invalid Id');
    }
    formsModel.findById(id, function(err, result){
        if(err) throw err;
        var validDate = new Date(result.validUntil);

        if(validDate <= Date.now()) {
            res.send({error: 'Form invalid since ' + validDate.toLocaleDateString() });
            return;
        }

        res.send(result);
    });
});

router.post('/save', function(req, res, next) {
    console.log(req.body);
    res.send('Ok');
    //formSubmition.create()
});

module.exports = router;