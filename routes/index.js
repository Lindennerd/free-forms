var express = require('express');
var formModel = require('../models/form');
var router = express.Router();

var indexService = require('../services/index.service');

/* GET home page. */
router.get('/', function (req, res, next) {
  const fieldTypes = indexService.getFieldTypes();
  res.render('index', { fieldTypes: fieldTypes });
});

router.get('/fieldTypes', function(req, res, next) {
  res.send(fieldTypes);
});

router.post('/save', function(req, res, next){
  const form = req.body;
  console.log(form);

  const formdb = new formModel({
    name: form.name,
    createdAt: new Date(),
    validUntil: form.validate,
    fields: form.fields
  });

  formdb.save();
});

module.exports = router;
