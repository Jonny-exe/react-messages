var mongoose = require('mongoose');
console.log("creating scheme");
var PostSchemaMessages = mongoose.Schema({
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
module.exports = mongoose.model('PostMessages', PostSchemaMessages);
console.log("Exported");
