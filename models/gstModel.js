var mongoose = require('mongoose');

var gstSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    gst: {
        type: String,
        required: true
    },
    total: {
        type: String,
        required: true
    }
});

var GST = mongoose.model('GST', gstSchema);
module.exports = GST;