const { buildSchema } = require('graphql');

module.exports = new buildSchema(`
	type Product {
		_id: Int
		name: String
		description: String
		image: String
	}

	type ProductResult {
		products: [Product]
		count: Int
	}

	type Query {
		allProducts(first: Int offset: Int): ProductResult
	}
`);