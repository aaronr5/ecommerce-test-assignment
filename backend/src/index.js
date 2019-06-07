const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const { DATABASE_URL } = require('./config');
const { resolver, schema } = require('./graphql');

const app = express();

app.use(cors());
app.use(express.static('./dist'));

app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: resolver,
	graphiql: true
}));

// Connect to db and start server
mongoose.connect(DATABASE_URL)
	.then(() => {
		app.listen(pocess.env.PORT || 8080);
		console.log('Server started on port 8080...');
	})
	.catch(err => console.log(err));