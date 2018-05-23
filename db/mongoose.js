const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://neo:neo123@ds113648.mlab.com:13648/neo',(err, db) => { //mongodb://localhost/BT
  if(err){
    return console.log(err);
  }
});

module.exports = {mongoose};
