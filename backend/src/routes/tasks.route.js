var express = require('express');
var router = express.Router();

/* GET tasks listing. */
router.get('/tasks', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
