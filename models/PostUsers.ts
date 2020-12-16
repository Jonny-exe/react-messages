const mongoose = require('mongoose')
console.log("creating scheme")
const PostSchemaUsers = mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  friends : {
    type: Array,
    required: true,
    default: []
  }
});
console.log("Exporting POST")
module.exports = mongoose.model('PostUsers', PostSchemaUsers);
console.log("Exported")
