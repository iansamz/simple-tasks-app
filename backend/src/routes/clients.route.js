var express = require('express');
var router = express.Router();

/* GET clients listing. */
router.get('/clients', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
