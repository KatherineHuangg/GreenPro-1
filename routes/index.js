'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index');
});


// //test
// router.get('/test', function (req, res) {
//     res.render('testBW');
// });

module.exports = router;
