const express = require('express');
var router = express();
const ejs = require('ejs');
const axios = require('axios');
var mongoose = require('../db/mongoose');

const GST = require('../models/gstModel');

router.set('view engine', 'ejs');

router.get('/', async (req, res, next) => {
  const results = await GST.find({});
  console.log(results);
  res.render('index', {results});
});

router.post('/add', async (req, res, next) => {
    var item = req.body.item;
    var price = req.body.price;
    var gst = req.body.gst;

    const response = await axios.get(`http://api.mathjs.org/v4/?expr=${price}%2B(${price}*${gst}%2F100)&precision=2`);
    var totalPrice = response.data;

    var gstData = {
      item: item,
      price: price,
      gst: gst,
      total: totalPrice
    }

    var result = await GST.create(gstData);
    console.log(result);
    res.redirect('/');

});

router.get('/graph', async (req, res, next) => {
  const results = await GST.find({});
  console.log(results);
  res.render('graph', {results});
});

module.exports = router;
