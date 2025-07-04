const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  feature:{
    type:[String],
    required:true
  }
});

module.exports = mongoose.model("business", businessSchema);
