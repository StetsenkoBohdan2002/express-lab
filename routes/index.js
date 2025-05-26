const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/catalog');
});

router.get('/my-page', function(req, res, next) {
  res.render('my_page', { 
    title: 'My route', 
    items: ['Element 1', 'Element 2', 'Element 3'] 
  });
});

module.exports = router;