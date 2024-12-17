const mongoose = require('mongoose');

const product = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  created_at: { type: Date, require: true}
});

module.exports = mongoose.model('Product', product);
