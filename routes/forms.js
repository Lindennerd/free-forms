var express = require('express');
var formsModel = require('../models/form');

var router = express.Router();

router.get('/:id', function(req, res, next) {
    res.render('form', {id: req.params.id});
});

router.get('/getById/:id', function(req, res, next) {
    formsModel.findById(req.params.id, function(err, result){
        if(err) throw err;
        var validDate = new Date(result.validUntil);

//        if(validDate >= Date.now()) {
        if(validDate <= Date.now()) {
            res.send({error: 'Form invalid since ' + validDate.toLocaleDateString() });
            return;
        }

        res.send(result);
    });
});

module.exports = router;