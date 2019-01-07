var express = require('express');
var formsModel = require('../models/form');
var formSubmition = require('../models/formSubmition');
var mongoose = require('mongoose');

var router = express.Router();

router.get('/:id', function (req, res, next) {
    res.render('form', { id: req.params.id });
});

router.get('/getById/:id', function (req, res, next) {
    const id = req.params.id.trim();

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(401).send('Invalid Id');
    }
    formsModel.findById(id, function (err, result) {
        if (err) throw err;
        if (!result) {
            res.status(500).send('Invalid Form');
            return;
        }

        var validDate = new Date(result.validUntil);

        if (validDate <= Date.now()) {
            res.send({ error: 'Form invalid since ' + validDate.toLocaleDateString() });
            return;
        }

        res.send(result);
    });
});

router.get('/data/:id', function (req, res, next) {
    res.render('formData', { formId: req.params.id });
});

router.get('/recoverdata/:id', function(req, res, next) {
    formSubmition.find({ form: req.params.id }, function(err, result) {
        if(err) {
            res.status(500).send(err);
            return;
        }

        console.log(result);
        res.send(result);
    })
});

router.post('/save', function (req, res, next) {
    formSubmition.create(req.body);
    res.send("Data Saved");
});

module.exports = router;
