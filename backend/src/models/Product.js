const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	_id: Number,
	name: String,
	description: String,
	image: String
});

const product = mongoose.model('products', ProductSchema);
module.exports = product;