const Product = require('../models/Product');

const rootResolver = {
	allProducts: async ({first, offset = 0}) => {
			const results = await Product.find();
			const count = results.length;
			const products = first === undefined ?
				results.slice(offset) :
				results.slice(offset, offset + first);
			return {products, count};
	}
}

module.exports = rootResolver;