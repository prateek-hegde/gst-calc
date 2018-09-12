const express = require('express');
var router = express();
var mongoose = require('../db/mongoose');

const GST = require('../models/gstModel');

router.post('/add', async (req, res, next) => {
    var item = req.body.item;
    var price = req.body.price;
    var gst = req.body.gst;
    var totalPrice = req.body.totalPrice;
    

    var gstData = {
      item: item,
      price: price,
      gst: gst,
      total: totalPrice
    }

    try{
        var result = await GST.create(gstData);
        return res.json({
            message:"Data Added"
        });

    } catch(err){
        return res.json({
            message:err
        });
    }
    

});

router.get('/get', async (req, res) => {
    try{
        const results = await GST.find({});
        return res.send(results);
    } catch(err) {
        return res.json({
            message:err
        });
    }
});

module.exports = router;