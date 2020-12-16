var mongoose = require("mongoose");
console.log("creating scheme");
var PostSchema = mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    receiver: {
        type: String,
        required: true
    },
    textContent: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        "default": Date.now
    }
});
console.log("Exporting POST");
module.exports = mongoose.model('Posts1', PostSchema);
console.log("Exported");
