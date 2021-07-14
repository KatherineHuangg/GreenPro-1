'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../../src/db');
var storeRouter = express.Router();
storeRouter.use(express.json());
/* GET home page. */
storeRouter.get('/managePage', function (req, res) {
    res.render('Store/product');
});



module.exports = storeRouter;