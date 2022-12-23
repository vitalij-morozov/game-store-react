const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  genre: { type: String, required: true },
  releaseDate: { type: String, required: true },
});

module.exports = mongoose.model('GameBuyProducts', ProductSchema);
