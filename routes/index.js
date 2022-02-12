var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/name', function(req, res) {
  const name = req.query.name;
  es.send('This is name: ' + name );
});

router.get('/age', function (req, res) {
  const age = req.query.age;
  const name = req.query.name;
  res.send('This is name: ' + name + ' and age is: ' + age);
});

router.post('/age', function (req, res) {
  const age = req.body.age;
  const name = req.body.name;
  res.send('This is name: ' + name + ' and age is: ' + age);
});

module.exports = router;
