var express = require('express');
var router = express.Router();

var indexService = require('../services/index.service');

/* GET home page. */
router.get('/', function (req, res, next) {
  const fieldTypes = indexService.getFieldTypes();
  res.render('index', { fieldTypes: fieldTypes });
});

router.get('/fieldTypes', function(req, res, next) {
  res.send(fieldTypes);
})

module.exports = router;
